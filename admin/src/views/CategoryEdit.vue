<template>
  <div class="categoryEdit">
    <p>创建分类</p>
    <el-form label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
          <el-button type="primary" native-type="submit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data(){
        return{
            model:{
                name:''
            }
        }
    },
    mathods:{
        save(){
            this.$http.post()
            console.log('提交');
        }
    }
};
</script>

<style>
</style>