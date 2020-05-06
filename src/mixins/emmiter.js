export default {
  methods: {
    dispatch(eventName, data) {
      let parent = this.$parent;
      // 查找父元素
      parent.$emit(eventName, data);
      // 递归查找父元素
      parent = parent.$parent;
    },
    boardcast(eventName, data) {
      boardcast.call(this, eventName, data);
    }
  }
};
// Vue.prototype.$dispatch = function(eventName, data) {
//   let parent = this.$parent;
//   // 查找父元素
//   while (parent) {
//     parent.$emit(eventName, data);
//     // 递归查找父元素
//     parent = parent.$parent;
//   }
// };

// Vue.prototype.$boardcast = function(eventName, data) {
//   boardcast.call(this, eventName, data);
// };
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    child.$emit(eventName, data);
    if (child.$children.length) {
      boardcast.call(child, eventName, data);
    }
  });
}
