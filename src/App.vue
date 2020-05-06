<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/lsit">About</router-link>
    </div>
    <!-- <router-view /> -->
    <FromTest></FromTest>
    <Tree></Tree>
  </div>
</template>
<script>
import FromTest from "./components/form";
import Tree from "./components/tree";
export default {
  name: "app",
  components: { FromTest, Tree }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
