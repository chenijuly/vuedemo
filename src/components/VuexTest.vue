<template>
  <div>
    <p>{{ $store.state.common.count }}</p>
    <p>{{ $store.getters.score }}</p>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    add() {
      this.$store.commit("SET_COUNT", 2);
    },
    async asyncAdd() {
      const result = await this.$store.dispatch("asyncAdd");
      console.log(result);
    }
  }
};
</script>

<style lang="scss" scoped></style>
