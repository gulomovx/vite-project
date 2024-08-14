<script setup >
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  icon: String
})
</script>

<template>
  <div class="">
      <!-- <h1 class="text-center text-3xl top-2">Why Choose Us</h1> -->
<div class="flex">
  <img class="bg-slate-300" :src="icon" alt="icon">
  <h1 class="">{{ title }}</h1>
  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse.</p>
</div>      
  </div>
  
</template>