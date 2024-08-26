import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from './components/ProductDetail.vue'
import Home from './components/Home.vue'
import Contact from  './components/Contact.vue'
import Card from './components/Card.vue'
import { createPinia } from 'pinia';
const pinia=createPinia()
const routes=[
      {
            path:'/', component:Home
      },
      {
            path:'/contact', component:Contact
      },
      { path: '/item/:id', component: ProductDetail, name: 'ProductDetail' },

]
const router = createRouter({
      history: createWebHistory(),
      routes,
    });
    
    const app = createApp(App);
    app.use(router);
    app.use(pinia)
    app.mount('#app');