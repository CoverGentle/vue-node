<template>
  <el-container style="height: 100vh">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="$route.path" unique-opened>
        
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-menu"></i>内容管理</template
          >
          <el-menu-item-group>
            <template slot="title">分类管理</template>
            <el-menu-item index="/categories/create">新建分类</el-menu-item>
            <el-menu-item index="/categories/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">物品管理</template>
            <el-menu-item index="/items/create">新建物品</el-menu-item>
            <el-menu-item index="/items/list">物品分类</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">英雄管理</template>
            <el-menu-item index="/heros/create">新建英雄</el-menu-item>
            <el-menu-item index="/heros/list">英雄分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-setting"></i>系统管理</template
          >
          <el-menu-item-group>
            <template slot="title">管理员管理</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-document"></i>业务管理</template
          >
          <el-menu-item-group>
            <template slot="title">文章管理</template>
            <el-menu-item index="/articles/create">新建文章</el-menu-item>
            <el-menu-item index="/articles/list">文章列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告管理</template>
            <el-menu-item index="/ads/create">新建广告</el-menu-item>
            <el-menu-item index="/ads/list">广告列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <el-button @click="deleteUser" type="text">注销</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>{{ username }}</span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      username: localStorage.username,
    };
  },
  methods: {
    deleteUser() {
      window.localStorage.clear();
      this.reload()
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
</style>