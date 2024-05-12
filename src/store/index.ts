import persistedState from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'
import { type App } from 'vue'

const store = createPinia()
store.use(persistedState)

export const setupStore = (app: App) => {
  app.use(store)
}

export { storeToRefs } from 'pinia'
