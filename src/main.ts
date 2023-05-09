import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'animate.css'

import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueQueryPlugin.install( app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60
      }
    }
  }
})

app.mount('#app')
