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
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
