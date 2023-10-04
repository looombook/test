import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
createApp(App).mount('#app')

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
