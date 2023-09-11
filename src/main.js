import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueEasyLightbox from 'vue-easy-lightbox'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTV35Zpcia1Zqpzqdmr_fQsje2AC3Ma6M",
  authDomain: "indi-sofyar-portfolio.firebaseapp.com",
  projectId: "indi-sofyar-portfolio",
  storageBucket: "indi-sofyar-portfolio.appspot.com",
  messagingSenderId: "938932270258",
  appId: "1:938932270258:web:b97683723f00fe1acac5ab",
  measurementId: "G-W2QBWM00V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


createApp(App).use(store).use(router).use(VueEasyLightbox).use(analytics).mount('#app')
