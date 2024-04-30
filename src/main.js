import { createApp } from 'vue'
import { createPinia } from 'pinia' // <- 1
import App from './App.vue'
import './main.css'

createApp(App)
    .use(createPinia()) // <- 2
    .mount('#app')
