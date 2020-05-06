<template>
  <li>
    <div @click="toggle">
      {{ model.name }}
      <!-- 有子元素就显示 -->
      <span v-if="isFolder">[{{ open ? "-" : "+" }}] </span>
    </div>
    <!-- 子树 -->
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="model in model.children"
        :model="model"
        :key="model.id"
      ></item>
    </ul>
  </li>
</template>
<script>
export default {
  name: "Item",
  props: {
    model: Object
  },
  data: function() {
    return {
      open: false
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    }
  }
};
</script>
<style>
.item {
  left: 0;
  text-align: left;
  list-style-type: none;
}
</style>
