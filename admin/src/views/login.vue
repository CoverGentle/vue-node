<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form :model="model" @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            type="password"
            v-model="model.password"
            placeholder=""
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {},
    };
  },
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      if (res) {
        localStorage.token = res.data.token;
        localStorage.username = this.model.username;
        this.$router.push("/");
        this.$message({
          type: "success",
          message: "登录成功",
        });
      }
    },
  },
};
</script>

<style>
.login-card {
  width: 25rem;
  margin: 5rem auto;
}
</style>