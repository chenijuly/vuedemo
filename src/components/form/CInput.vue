<template>
  <div>
    <!-- 自定义组件要实现v-model 必须实现:value, @input -->
    <!-- $attrs存储的是props之外的部分-->
    <!-- $attrs => 展开{type: 'password'}-->
    <input :value="value" @input="onInput" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false, //避免顶层的从其继承
  props: {
    value: {
      type: [String],
      default: ""
    }
  },
  methods: {
    onInput(e) {
      // 通知父组件数值变化
      this.$emit("input", e.target.value);
      // 通知FormItem校验
      this.$parent.$emit("validate");
    }
  }
};
</script>

<style lang="scss" scoped></style>
