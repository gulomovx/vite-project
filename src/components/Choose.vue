<script setup >
import weel from '/well.png'
import live from '/live.png'
import free from '/free.png'
import regular from '/regular.png'
import { defineProps, ref } from 'vue';

const props = defineProps({
  title: String,
  icon: String
})

const data =ref([
  {title:'Well documentation', icon:weel},
  {title:'Live support', icon:live},
  {title:'Free recource', icon:free},
  {title:'Regular update', icon:regular},
])
</script>

<template>
  <div class="top-[900px]">
      <h1 class="text-center text-3xl top-2">Why Choose Us</h1>
      <div class="container relative top-[-20px] flex flex-col md:flex-row mx-auto justify-between   items-center gap-12">

<div v-for="item in data" class="md:w-[200px] w-[400px] border  shadow-md flex flex-col gap-4 text-slate-700 hover:text-white hover:bg-gradient-to-tr from-red-500 to-teal-500 duration-300  px-4 py-2 rounded-xl">
  <img class="bg-bg-clip-text bg-gradient-to-tr text-transparent  from-red-600 to-indigo-600  h-[80px] w-[80px] p-4  rounded-full text-white" :src="item.icon" alt="icon">
  <h1 class="text-[18px] font-semibold">{{ item.title }}</h1>
  <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, blanditiis.</p>
  
  <!-- <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, esse.</p> -->
</div> 

</div>

  </div>
  
</template>