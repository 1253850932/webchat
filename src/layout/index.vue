<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout-right"></div>
    <div class="layout-left"></div>
  </div>
</template>
<style lang="scss">
:root {
  --right-width: 100px;
}
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #bfa;
  display: flex;
  .layout-right {
    width: var(--right-width);
    height: 100%;
    background-color: aqua;
  }
  .layout-left {
    width: calc(100vw - var(--right-width));
    height: 100%;
    background-color: aliceblue;
  }
}
</style>
