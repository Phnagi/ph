import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // 加入這行

const app = createApp(App)
app.use(router) // 加入這行
app.mount('#app')
