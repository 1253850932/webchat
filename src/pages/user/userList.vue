<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const active = ref<number>()
const router = useRouter()
const startCall = (e: number) => {
  active.value = e
  router.push({ path: 'chat', query: { uid: e } })
}
</script>

<template>
  <div class="user-list">
    <div class="userList-left">
      <el-scrollbar height="100vh">
        <div v-for="item in 120" :key="item" class="scrollbar-item" :class="{ 'scrollbar-item-active': active === item }" @click="startCall(item)">
          <img src="../../assets/logo.jpg" style="width: 50px; height: 50px" />
          <div>111</div>
        </div>
      </el-scrollbar>
    </div>
    <div class="userList-right"><router-view></router-view></div>
  </div>
</template>
<style scoped lang="scss">
.user-list {
  display: flex;
  .userList-left {
    width: 150px;
    height: 100vh;
    overflow: hidden;
    .scrollbar-item {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin-bottom: 20px;
      &.scrollbar-item-active {
        background-color: #eaeaea;
      }
    }
  }
  .userList-right {
    flex: 1;
    height: 100vh;
  }
}
</style>
