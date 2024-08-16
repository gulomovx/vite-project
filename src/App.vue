<script setup>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Choose from './components/Choose.vue'
import Card from './components/Card.vue';
import Featured from './components/Featured.vue'
</script>

<template>
  <div class="flex justify-between flex-col">
    <Header/>
     <Featured/>
    <!-- <Card/> -->
  </div>
  <!-- <Navbar/> -->
</template>