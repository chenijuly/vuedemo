<template>
  <div>
    List
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  watch:{
    $route() {
      console.log(this.$route.matched);
    }
  },
  mounted() {
    console.log(this.$route.matched);
  }
};
</script>

<style lang="scss" scoped></style>
