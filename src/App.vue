<script setup>
import Header from './components/Header.vue'
import Featured from './components/Featured.vue'
import CheckOut from './components/CheckOut.vue'
import Carousel from './components/Carousel.vue';
import News from './components/News.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue';
import {RouterView} from 'vue-router'

components:{
  Navbar,
  Footer
}



</script>

<template >
  <!-- <div class="  bg-white ">
    <Header/>
     <Featured/>
     <CheckOut/>
     <Carousel/>
     <News/>
     <Footer/>
  </div> -->
  <Navbar/>
  <main class=" min-h-screen">
  <RouterView/>
  </main>
  <Footer/>
</template>