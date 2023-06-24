<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout-left">
      <div class="top">
        <img src="../assets/logo.jpg" alt="" />
        <el-icon size="30" style="margin-bottom: 30px; cursor: pointer" :color="$router.currentRoute.value.name === 'userList' ? 'red' : '#acacac'" @click="$router.push('userList')"
          ><ChatDotSquare
        /></el-icon>
        <el-icon size="30" style="cursor: pointer" :color="$router.currentRoute.value.name === 'userAdd' ? 'red' : '#acacac'" @click="$router.push('userAdd')"><User /></el-icon>
      </div>
      <el-icon size="30" color="#acacac" class="quit"><SwitchButton /></el-icon>
    </div>
    <div class="layout-right"><router-view></router-view></div>
  </div>
</template>
<style lang="scss">
:root {
  --right-width: 100px;
}
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  .layout-left {
    width: var(--right-width);
    height: 100%;
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
      width: 80%;
      object-fit: fill;
      margin-bottom: 30px;
    }
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .layout-right {
    width: calc(100vw - var(--right-width));
    height: 100%;
    background-color: #ffffff;
  }
}
</style>
