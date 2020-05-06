let Vue;
class VueRouter {
  constructor(options) {
    this.$options = options;
    this.routeMap = {};

    this.app = new Vue({
      data: {
        current: "/"
      }
    });
  }
  init() {
    this.bindEvents();

    // 解析路由配置
    this.currentRouteMap(this.$options);

    // 创建
    this.initComponent();
  }
  bindEvents() {
    window.addEventListener("hashchange", this.onHashChange.bind(this));
    window.addEventListener("load", this.onHashChange.bind(this));
  }
  onHashChange() {
    // localhost/#/home
    this.app.current = window.location.hash.slice(1) || "/";
  }
  currentRouteMap(options) {
    options.routes.forEach(item => {
      // ['/home']:{path: '/home', component: 'Home'}
      this.routeMap[item.path] = item;
    });
  }
  initComponent() {
    // 声明两个全局组件
    Vue.component("router-link", {
      props: {
        to: String
      },
      render(h) {
        // <a :href="to"> xxx </a>
        return h("a", { attrs: { href: "#" + this.to } }, this.$slots.default);

        // return <a href={this.to}>{this.$slots.default}</a>
      }
    });

    Vue.component("router-view", {
      // this指向VueRouter实例
      render: h => {
        const Comp = this.routeMap[this.app.current].component;
        return h(Comp);
      }
    });
  }
}

// 把VueRouter 变为插件
VueRouter.install = function(_Vue) {
  Vue = _Vue; //这里保存，上面使用

  // 混入任务
  Vue.mixin({
    // 混入 就是扩展Vue
    beforeCreate() {
      // 在面签初始化时会被调用
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
        this.$options.router.init();
      }
    }
  });
};

export default VueRouter;
