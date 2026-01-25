// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'

// 引入你剛剛建立的頁面組件
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import WorkDetail from '../views/WorkDetail.vue'

const routes = [
  {
    path: '/',          // 根路徑，通常對應你的 /index
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',     // 關於我
    name: 'about',
    component: AboutView
  },
  {
    path: '/works',     // 作品列表
    name: 'works',
    component: WorksView
  },
  {
    // 動態路由：:id 代表這是一個變數
    // 例如網址是 /works/1，這個 id 就會是 1
    path: '/works/:id', 
    name: 'work-detail',
    component: WorkDetail
  }
]

const router = createRouter({
  // 使用 Hash 模式 (網址會有 #)，保證在 GitHub Pages 重新整理不會爛掉
  history: createWebHashHistory(),
  routes
})

export default router