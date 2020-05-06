<template>
  <div>
    <CForm :model="model" :rules="rules" ref="loginForm">
      <CFormItem label="用户名" prop="username">
        <c-input v-model="model.username"></c-input>
      </CFormItem>
      <CFormItem label="密码" prop="password">
        <c-input v-model="model.password" type="password"></c-input>
      </CFormItem>
      <CFormItem>
        <button @click="onLogin">登录</button>
      </CFormItem>
    </CForm>
    {{ model }}
  </div>
</template>
<script>
import CInput from "./CInput.vue";
import CFormItem from "./CFormItem.vue";
import CForm from "./CForm.vue";
import Notice from "../notice";
import create from "@/utils/create";
export default {
  components: {
    CInput,
    CFormItem,
    CForm
  },
  data() {
    return {
      model: {
        username: "cjd",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "用户名必填" }],
        password: [{ required: true, message: "密码必填" }]
      }
    };
  },
  methods: {
    onLogin() {
      let notice;
      console.log(Notice);
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          notice = create(Notice, {
            title: "xx",
            message: "校验通过"
          });
          console.log("校验通过");
        } else {
          notice = create(Notice, {
            title: "xx",
            message: "校验有误"
          });
          console.log("校验有误");
        }
        notice.show();
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
