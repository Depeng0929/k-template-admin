/** 重置样式 */
import '@/styles/reset.css'
import 'uno.css'
import '@/styles/global.scss'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'

async function setupApp() {
  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

setupApp()
