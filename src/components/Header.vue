<script setup>
import Navbar from './Navbar.vue'
import { Icon } from '@iconify/vue';
import angular from '../assets/angular.png'
import elips from '../assets/elips.png'
import laravel from '../assets/laravel.png'
import node from '../assets/node.png'
import vue from '../assets/vue.png'
import net from '../assets/net.png'
import group from '../assets/group.png'
import Choose from './Choose.vue';
import { ref } from 'vue';
import {NewspaperIcon} from '@vue-hero-icons/outline'
import FeatureCard from './FeatureCard.vue';

const cards = ref([
  { title: 'Well documentation', icon: NewspaperIcon },
//   { title: 'Live support', icon: vueIcon },
//   { title: 'Free resources', icon: vueIcon },
//   { title: 'Regular update', icon: vueIcon },
  
])






</script>


<template>
      <div    :class="`w-full overflow--hidden bg-cover bg-no-repeat h-screen  relative flex justify-between flex-col z-`">
            
         
            <div class="container bg-slate-00 h-screen md:mt-40 mt-12 ">
                  <div :style="{
      backgroundImage: `url(${group})`,
      backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // height: '80vh',
    }" class="w-full  hidden lg:block max-w-[950px] md:h-[900px] lg:h-[980px]  absolute top-[-320px] right-[-200px] -z-10 ">
    </div>
                  <div class="  flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1420px]">
                        <!-- text, paragraph, search -->
                        <div class="md:w-[589px]">
                              <h1 class="md:text-5xl text-3xl font-semibold tracking-widest text-my-color">World Top <span class=" bg-clip-text bg-gradient-to-tr text-transparent  from-red-600 to-indigo-600">Themes,</span></h1>
                              <br>
                              <h1 class="md:text-5xl text-3xl font-semibold tracking-widest"> <span class=" bg-clip-text bg-gradient-to-tr text-transparent  btn-bg">Plugins & Templates </span></h1>
                               <p class="mt-4 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cupiditate obcaecati ipsa eum asperiores odit quam aliquam assumenda quibusdam delectus.</p>
                              <div class="flex justify-between items-center border rounded-lg p-1 mt-8 w-full md:w-[400px] lg:w-[500px]">
                                    <input type="text" placeholder="search" class="outline-none">
                                    <button class="flex justify-between items-center text-white btn-bg p-2 px-4 rounded-xl gap-2">
                                          <Icon icon="material-symbols:search" />
                                          Search
                                    </button>
                              </div>
                              </div>

                              <!-- framework images -->
                        <!-- <div class="hidden md:block lg:flex">
                          <img :src="angular" alt="">
                          <img :src="laravel" alt="">
                          <img :src="node" alt="">
                          <img :src="vue" alt="">
                          <img :src="net" alt="">
                        </div> -->

                  </div>
            </div>
      <Choose
      v-for="(card, index) in cards" :key="index"
      :title="card.title" 
      
      />
      <FeatureCard/>
      </div>
</template>