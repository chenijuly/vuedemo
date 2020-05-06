<template>
  <div v-if="isShow">
    Notice
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    message: {
      type: String,
      default: ""
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    show() {
      this.isShow = true;
      window.setTimeout(() => {
        this.hide();
      }, this.duration);
    },
    hide() {
      this.isShow = false;
      this.remove();
    }
  }
};
</script>

<style lang="scss" scoped></style>
