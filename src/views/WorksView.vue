<script setup>
import { worksData } from '../data/works.js'

// 1. 取得資料
const works = worksData

// 2. ★ 新增這個函式：專門負責組裝圖片路徑
const getImageUrl = (folderPath, coverFilename) => {
  // 把 import.meta.env.BASE_URL 寫在這裡，JS 就能正確讀取
  return `${import.meta.env.BASE_URL}assets/photos/${folderPath}/${coverFilename}`
}
</script>

<template>
  <div class="works-container">
    <h1>作品列表</h1>
    
    <div class="grid">
      <div v-for="item in works" :key="item.id" class="card">
        <router-link :to="'/works/' + item.id">
          
          <img 
            :src="getImageUrl(item.folderPath, item.cover)" 
            alt="cover"
            loading="lazy" 
          />
          
          <h3>{{ item.title }}</h3>
          <span class="tag">{{ item.category.toUpperCase() }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

  <style scoped>
  /* 加一個簡單的分類標籤樣式 */
  .tag {
    display: inline-block;
    font-size: 12px;
    color: #888;
    border: 1px solid #ddd;
    padding: 2px 8px;
    border-radius: 12px;
    margin-top: 5px;
    letter-spacing: 1px;
  }
  </style>