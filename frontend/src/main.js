import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@/assets/base.css";

const app = createApp(App)

app.use(router)

app.mount('#app')
