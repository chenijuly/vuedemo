<template>
  <div>
    Detail
    <p>{{ id }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default: ""
    }
  },
  data() {
    return {
      crumbData: []
    };
  },
  watch: {
    $route: {
      handler() {
        console.log(this.$route.matched);
        this.crumbData = this.$route.matched(m => m.name || m.redirect);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
