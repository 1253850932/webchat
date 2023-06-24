<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
const route = useRoute()
const uid = ref()
const getUid = () => {
  uid.value = route.query.uid
}
watch(
  () => route.query.uid,
  () => {
    getUid()
  },
  { immediate: true }
)
</script>

<template>
  <div class="chat">
    <h2>啊啊啊</h2>
    <el-scrollbar height="70vh">
      <div class="chat-list" v-for="item in 100">
        <div class="chat-list-left">
          <img src="../../assets/logo.jpg" alt="" />
          <div class="chat-list-msg">sdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxc</div>
        </div>
        <div class="chat-list-right">
          <img src="../../assets/logo.jpg" alt="" />
          <div class="chat-list-msg">sdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxcsdfasdfasdfaaacvxcvxcvxcvxcvxcvxc</div>
        </div>
      </div>
    </el-scrollbar>
    <div class="chat-bottom">
      <el-input class="textarea" type="textarea" :rows="8" placeholder="请输入" />
      <el-button type="primary">视频通话</el-button>
      <el-button type="primary">发送</el-button>
    </div>
  </div>
</template>
<style scoped lang="scss">
.chat {
  h2 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }
  .chat-list {
    img {
      width: 70px;
      height: 70px;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .chat-list-left {
      display: flex;
      flex-direction: row;
    }
    .chat-list-right {
      display: flex;
      flex-direction: row;
      flex-direction: row-reverse;
    }
    .chat-list-msg {
      border-radius: 10px;
      max-width: 400px;
      word-wrap: break-word;
      margin-left: 10px;
      margin-right: 10px;
      background-color: #37ec9a7c;
    }
  }
  .chat-bottom {
    .textarea {
      width: 85%;
      margin-top: 10px;
    }
  }
}
</style>
