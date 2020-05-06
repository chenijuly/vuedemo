<template>
  <div class="home">
    <router-view />
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <VuexTest></VuexTest>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import VuexTest from "@/components/CVuexTest.vue";

export default {
  name: "Home",
  components: {
    VuexTest
    // HelloWorld
  }
};
</script>
