import { createApp } from 'vue'
import './style.css'
import '@/assets/base/tailwind.css'
import './service/axios'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'

const app = createApp(App)

// app.use(ElementPlus)
app.use(router)
setupStore(app)

app.mount('#app')
