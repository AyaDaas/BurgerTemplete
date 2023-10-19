import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import SmallSectionTitle from './components/content/SmallSectionTitle.vue';
import ImageTitleDesc from './components/content/ImageTitleDesc.vue';
import TitleAnddesc from './components/content/TitleAnddesc.vue';
import appFirebase from './services/FirebaseConfig'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
app.component('SmallSectionTitle', SmallSectionTitle)
app.component('ImageTitleDesc', ImageTitleDesc)
app.component('TitleAnddesc', TitleAnddesc)
