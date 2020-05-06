// 1. 维护状态 state
// 2. 修改状态 commit
// 3. 业务逻辑的控制 dispatch
// 4. 状态派发getter
// 5. 实现state响应式
// 6. 插件
// 7.混入

let Vue;
function install(_Vue, storename = "$store") {
  Vue = _Vue;

  // 混入
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype[storename] = this.$options.store;
      }
    }
  });
}

class Store {
  // options: {state:{count:0}, mutations: {count(state){} } }
  constructor(options = {}) {
    // 利用vue数据响应式
    this.state = new Vue({
      data: options.state
    });

    this.mutations = options.mutations || {};
    this.actions = options.actions || {};
    options.getters && this.handleGetters(options.getters)
  }

  //触发mutations 需要实现commit
  commit = (type, args) => {
    // this指向store实例
    const fn = this.mutations[type]; // 获取状态变更函数
    fn(this.state, args);
  };
  dispatch = (type, args) => {
    const fn = this.actions[type];
    return fn({ commit: this.commit, state: this.state }, args);
  };
  // {getters: {Score(state){return state.xx}}}
  handleGetters(getters){
    this.getters = {}; // store实例上的getters
    // 定义只读的属性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    }) 
  }
}

export default { Store, install };
