<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const submit = () => {
  localStorage.setItem('token', '111')
  router.replace('/')
}
</script>

<template>
  <div class="login">
    <div class="login-container">
      <el-form label-width="50px" style="max-width: 460px">
        <h1 class="login-title">登录</h1>
        <el-form-item label="账号" prop="username">
          <el-input />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input />
        </el-form-item>
        <el-form-item>
          <el-button size="large" @click="submit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-container {
    width: 360px;
    height: 200px;
    background-color: rgb(212, 235, 207);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
    .login-title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
}
</style>
