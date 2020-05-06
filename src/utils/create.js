// 创建指定实例并挂载于body上
import Vue from "vue";
export default function create(Component, props) {
  // 先创建vue实例
  const vm = new Vue({
    render(h) {
      console.log(Component)
      // render方法提供给我们一个h函数，它可以渲染VNode
      return h(Component, { props });
    }
  }).$mount(); // 更新操作
  console.log(vm);
  // 1. vm已经创建了组件实例
  // 2.通过$children获取该组件实例
  const comp = vm.$children[0];
  // 3.追加body
  document.body.appendChild(vm.$el);

  //4. 清理函数
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy;
  };
  return comp;
}
