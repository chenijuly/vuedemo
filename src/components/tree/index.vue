<template>
  <div id="tree">
    <ul>
      <item class="item" :model="treeData"></item>
    </ul>
  </div>
</template>
<script>
import Item from "./item";
export default {
  name: "tree",
  components: { Item },
  data: function() {
    return {
      treeData: {
        name: "tree",
        children: [
          {
            id: 20,
            parentId: -1,
            children: [
              {
                id: 200,
                parentId: 20,
                children: [
                  {
                    id: 2001,
                    parentId: 200,
                    children: [],
                    name: "银行组织"
                  },
                  {
                    id: 2002,
                    parentId: 210,
                    children: [],
                    name: "担保公司组织"
                  }
                ],
                name: "组织管理"
              },
              {
                id: 210,
                parentId: 20,
                children: [],
                name: "角色管理"
              },
              {
                id: 220,
                parentId: 200,
                children: [
                  {
                    id: 2201,
                    parentId: 220,
                    children: [],
                    name: "银行"
                  },
                  {
                    id: 2202,
                    parentId: 220,
                    children: [],
                    name: "担保公司"
                  }
                ],
                name: "用户管理"
              }
            ],
            name: "权限管理"
          },
          {
            id: 300,
            parentId: -1,
            children: [
              {
                id: 310,
                parentId: 300,
                children: [],
                name: "业务类型"
              },
              {
                id: 320,
                parentId: 300,
                children: [],
                name: "业务字段"
              },
              {
                id: 330,
                parentId: 300,
                children: [],
                name: "话术管理"
              },
              {
                id: 340,
                parentId: 300,
                children: [],
                name: "个性化设置"
              }
            ],
            name: "业务配置"
          },
          {
            id: 400,
            parentId: -1,
            children: [],
            name: "面签列表"
          },
          {
            id: 500,
            parentId: -1,
            children: [],
            name: "管理台"
          },
          {
            id: 600,
            parentId: -1,
            children: [],
            name: "菜单管理"
          }
        ]
      }
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
