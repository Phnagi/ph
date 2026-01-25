<script setup>
// 1. 引入剛剛寫好的 Navbar 組件
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  
  <router-view />
</template>

<style>
/* 全域設定：
   因為 Navbar 是白色的，如果你的背景是白的，字會看不見。
   建議在開發時先把背景設深色，或是確認 HomeView 有放背景圖。
*/
body {
  margin: 0;
  padding: 0;
  background-color: #222; /* 暫時設為深色，模擬你的設計圖背景 */
  font-family: sans-serif;
}
</style>