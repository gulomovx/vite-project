<script setup>
import Header from './Header.vue';
 import Featured from './Featured.vue';    
   import CheckOut from './CheckOut.vue';  
import Carousel from './Carousel.vue';
     import News from './News.vue';
     import Card from './Card.vue';
     import Contact from './Contact.vue';
 components :{
      Header,
      // Featured,
      Card
      CheckOut,
      Carousel,
      News

 }
</script>

<template>
  <Header/>
  <Featured/>
  <CheckOut/>
  <Carousel/>
  <News/>
</template>