<template>
  <div>
    List
  </div>
</template>
<script>
export default {
  data() {
    return {
      crumbData: []
    };
  },
  watch: {
    $route: {
      handler(route) {
        console.log(route.matched);
        this.crumbData = route.matched.map(m => m.name || m.redirect);
      },
      immediate: true
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped></style>
