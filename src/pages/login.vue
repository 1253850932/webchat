<script setup lang="ts"></script>

<template>
  <div class="login">
    <el-form label-width="100px" style="max-width: 460px" class="login-container">
      <el-form-item label="账号">
        <el-input />
      </el-form-item>
      <el-form-item label="密码">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button>登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style scoped lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
