import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueEasyLightbox from 'vue-easy-lightbox'


createApp(App).use(store).use(router).use(VueEasyLightbox).mount('#app')
