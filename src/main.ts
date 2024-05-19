import { createApp } from 'vue'
import './style.css'
import '@/assets/base/tailwind.css'
import './service/axios'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// app.use(ElementPlus)
app.use(router)
setupStore(app)

app.mount('#app')
