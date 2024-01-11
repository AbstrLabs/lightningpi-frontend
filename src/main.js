import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from '@/router'
import '@/assets/styles/base.css'
import '@/assets/styles/main.css'
import GoogleSignInPlugin from "vue3-google-signin"

const app = createApp(App)

app.use(ElementPlus)

app.use(router)

app.use(GoogleSignInPlugin, {
  clientId: '593551868518-499sged0dhvgjmjdupj5kf9sl57hcnvd.apps.googleusercontent.com',
});

app.mount('#app')