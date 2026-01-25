<script setup>
// 這裡目前不需要特殊的 JS 邏輯
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">NAGI</router-link>
    </div>

    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/works">Works</router-link>
    </div>
  </nav>
</template>

<style scoped>
/* 導覽列容器 */
.navbar {
  /* 關鍵：使用 absolute 讓它浮在最上層，不佔據排版空間 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  
  /* 排版設定：左右分開 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  /* 根據你的設計圖調整間距 */
  padding: 40px 60px; 
  box-sizing: border-box; /* 確保 padding 不會撐大寬度 */
  
  /* 確保它在圖片上面 */
  z-index: 100; 
  background-color: transparent; /* 透明背景 */
}

/* 連結樣式 */
a {
  text-decoration: none;
  color: white; /* 設計圖是白字 */
  font-family: 'Helvetica Neue', Arial, sans-serif; /* 乾淨的無襯線字體 */
  font-size: 16px;
  letter-spacing: 1px; /*稍微加一點字距增加質感 */
  transition: opacity 0.3s;
}

/* 右邊選單的間距 */
.menu a {
  margin-left: 40px;
}

/* 滑鼠移過去的效果 */
a:hover {
  opacity: 0.7;
}

/* Logo 特別樣式 (如果要加粗或變大) */
.logo a {
  font-weight: bold;
  font-size: 18px;
}

/* RWD: 手機版調整 (避免 padding 太大) */
@media (max-width: 768px) {
  .navbar {
    padding: 20px 20px;
  }
  .menu a {
    margin-left: 20px;
  }
}
</style>