<script setup>
import { Icon } from '@iconify/vue';
import logo from '../assets/logo.png'
import heart from '../assets/heart.png'
import sign from '../assets/sign.png'
import bag from '../assets/bag.png'
</script>


<template>
  <!-- component -->

  <div class="w-full   relative  ">
    <section class="relative mx-auto container mt-4">
      <!-- navbar -->
      <nav class="flex  justify-between items-center  border  text- rounded-2xl text-slate-500 h-[60px] md:h-[100px]">
        <div class="px-5 xl:px-8 b  w-full mx-auto flex  justify-center items-center ">
          <router-link to="/" class="md:text-3xl text-[14px] font-bold font-heading" href="#">

            <img :src="logo" alt="">

          </router-link>
          <div
            class="flex justify-between items-center md:ml-6 ml-4 gap-4 md:py-2 md:px-6 p-1 px-2 btn-bg rounded-2xl text-white">
            <Icon icon="icon-park-solid:all-application" />
            <h1 class="">Categories</h1>
            <Icon icon="teenyicons:down-solid" />

          </div>

          <div class=" flex items-center px-4 mx-auto font-semibold font-heading space-x-12 ">
            <!-- <i class=""></i> -->
          </div>
          <!-- Header Icons -->
          <div class="hidden xl:flex items-center space-x-5 ">

            <img class="h-[50px] w-[50px] object-cover  z-10 cursor-pointer " :src="heart" alt="">
            <!-- component -->
            <div class="h-[50px] w-[65px] btn-bg flex justify-center items-center">
              <div class="relative  py-">
                <div class="mt-[-4px] absolute left-3">
                  <p
                    class="flex h-4 w-4 items-center justify-center rounded-full btn-bg border-[2px] border-white p-2 text-xs text-white">
                    3</p>
                </div>
                <img class="h-[32px] w-[32px] object-cover   cursor-pointer " :src="bag" alt="">

                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="file: mt-4 h-6 w-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
  </svg> -->
              </div>
            </div>

            <img class="h-[50px] w-[137px] object-cover  z-10 cursor-pointer " :src="sign" alt="">

          </div>
        </div>
        <!-- Responsive navbar -->


        <div
          class="h-[40px] w-[50px] mr-6 md:h-[30px] md:w-[45px] sm:block md:hidden  mr- btn-bg flex flex-row justify-center items-center">
          <div class="relative flex ml-4  justify-center  flex-row-reverse">
            <div class="relative  ">
              <p
                class="flex relative right-2 mt-[-6px] h-4 w-4 items-center justify-center rounded-full btn-bg border-[2px] border-white p-2 text-xs text-white">
                3</p>
            </div>
            <img class="h-[20px] w-[30px] object-cover    cursor-pointer " :src="bag" alt="">
          </div>
        </div>
      </nav>

    </section>
  </div>

</template>