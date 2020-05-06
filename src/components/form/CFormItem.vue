<template>
  <div class="form-item">
    <label v-if="label" class="form-label">
      {{ label }}
    </label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="errorMessage" class="form-error-msg">
      {{ errorMessage }}
    </p>
  </div>
</template>
<script>
import Schema from "async-validator";
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String
  },
  data() {
    return {
      errorMessage: ""
    };
  },
  inject: ["form"],
  mounted() {
    // 监听校验时间， 执行监听
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 执行校验组间
      // 1.获取校验规则
      const rules = this.form.rules[this.prop];

      // 2.获取数值
      const value = this.form.model[this.prop];

      // 执行校验
      const desc = {
        [this.prop]: rules
      };
      const schema = new Schema(desc);
      // 参数1是值, 参数2是校验错误对象数组
      // 返回 Promise<boolean>
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  .form-label {
    width: 100px;
    text-align: right;
    padding-right: 10px;
  }
  .form-error-msg {
    padding-left: 10px;
    display: contents;
    color: red;
  }
}
</style>
