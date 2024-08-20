<script setup>
import Header from './components/Header.vue'
import Featured from './components/Featured.vue'
import CheckOut from './components/CheckOut.vue'
import Carousel from './components/Carousel.vue';
import News from './components/News.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex justify-between bg-white flex-col">
    <Header/>
     <Featured/>
     <CheckOut/>
     <Carousel/>
     <News/>
     <Footer/>
  </div>
</template>