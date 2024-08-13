<script setup>
import Navbar from './Navbar.vue'
import { Icon } from '@iconify/vue';
import angular from '../assets/angular.png'
import elips from '../assets/elips.png'
import laravel from '../assets/laravel.png'
import node from '../assets/node.png'
import vue from '../assets/vue.png'
import net from '../assets/net.png'
</script>


<template>
      <div class="w-full  bg-white flex justify-between flex-col z-20">
            <Navbar />
            <div class="w-full h-screen md:mt-40 mt-12 ">
                  <div class=" flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1420px]">
                        <!-- text, paragraph, search -->
                        <div class="md:w-[50%]">
                              <h1 class="md:text-5xl text-3xl font-semibold tracking-widest">World Top <span class=" bg-clip-text bg-gradient-to-tr text-transparent  from-red-600 to-indigo-600">Themes,</span></h1>
                              <br>
                              <h1 class="md:text-5xl text-3xl font-semibold tracking-widest"> <span class=" bg-clip-text bg-gradient-to-tr text-transparent  from-red-600 to-indigo-600">Plugins & Templates </span></h1>
                               <p class="mt-4 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cupiditate obcaecati ipsa eum asperiores odit quam aliquam assumenda quibusdam delectus.</p>
                              <div class="flex justify-between items-center border rounded-lg p-1 mt-8">
                                    <input type="text" placeholder="search" class="outline-none">
                                    <button class="flex justify-between items-center text-white bg-gradient-to-tr from-red-500 to-teal-500 p-2 px-4 rounded-xl gap-2">
                                          <Icon icon="material-symbols:search" />
                                          Search
                                    </button>
                              </div>
                              </div>
                              <img class="absolute top-0 right-0 md:h-[700px] h-[370px] -z-10" :src="elips" alt="">

                              <!-- framework images -->
                        <div class="hidden md:block lg:flex">
                          <img :src="angular" alt="">
                          <img :src="laravel" alt="">
                          <img :src="node" alt="">
                          <img :src="vue" alt="">
                          <img :src="net" alt="">
                        </div>

                  </div>
            </div>
      </div>
</template>