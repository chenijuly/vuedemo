import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import router from "./crouter";
import store from "./store";

Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

// <div id="box", class="foo"><span> aaa </span</div>
Vue.component("comp", {
  render(h) {
    return h("div", { class: { foo: true }, attrs: { id: "box" } }, [
      h("span", "aaa")
    ]);
  }
});

Vue.prototype.$dispatch = function(eventName, data) {
  let parent = this.$parent;
  // 查找父元素
  while (parent) {
    parent.$emit(eventName, data);
    // 递归查找父元素
    parent = parent.$parent;
  }
};

// Vue.prototype.$boardcast = function(eventName, data) {
//   boardcast.call(this, eventName, data);
// };
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
