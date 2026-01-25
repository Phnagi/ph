<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { worksData } from '../data/works.js' // 記得確認路徑是否正確

const route = useRoute()

// 1. 根據網址上的 ID (route.params.id) 找出對應的那一筆作品資料
const workItem = computed(() => {
  return worksData.find(item => item.id === route.params.id)
})

// 2. 處理路徑的函式
const getAssetUrl = (folderPath, filename, type) => {
  // 如果是影片，假設放在 public/videos/ 下 (根據你之前的設定)
  if (type === 'video') {
    return `${import.meta.env.BASE_URL}${folderPath}/${filename}`
  }
  // 如果是照片，放在 public/assets/photos/ 下
  return `${import.meta.env.BASE_URL}assets/photos/${folderPath}/${filename}`
}
</script>

<template>
  <div v-if="workItem" class="detail-container">
    
    <div class="header">
      <h1>{{ workItem.title }}</h1>
      <p class="desc">{{ workItem.desc }}</p>
      <span class="category-tag">{{ workItem.category }}</span>
    </div>

    <div class="content-grid">
      <div v-for="(file, index) in workItem.images" :key="index" class="item-card">
        
        <video 
          v-if="workItem.type === 'video'" 
          controls 
          autoplay 
          muted 
          loop 
          playsinline
        >
          <source :src="getAssetUrl(workItem.folderPath, file, 'video')" type="video/mp4">
          您的瀏覽器不支援影片標籤
        </video>

        <img 
          v-else 
          :src="getAssetUrl(workItem.folderPath, file, 'photo')" 
          alt="detail" 
          loading="lazy"
        />
        
      </div>
    </div>

    <div class="footer">
      <router-link to="/works" class="back-btn">← 返回作品列表</router-link>
    </div>

  </div>

  <div v-else class="not-found">
    <h2>找不到這個作品...</h2>
    <router-link to="/works">回列表</router-link>
  </div>
</template>

<style scoped>
.detail-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.header {
  text-align: center;
  margin-bottom: 50px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.desc {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.category-tag {
  background-color: #eee;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #555;
  text-transform: uppercase;
}

/* 瀑布流或網格排版 */
.content-grid {
  columns: 3 300px; /* CSS Column 屬性，快速做瀑布流效果 */
  column-gap: 20px;
}

.item-card {
  break-inside: avoid; /* 防止圖片被切斷 */
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

img, video {
  width: 100%;
  height: auto;
  display: block;
}

.footer {
  margin-top: 50px;
  text-align: center;
}

.back-btn {
  display: inline-block;
  padding: 10px 24px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s;
}

.back-btn:hover {
  background-color: #555;
}

.not-found {
  text-align: center;
  padding: 100px;
}
</style>