<script setup>
import { ref } from 'vue'
const categories = ref(['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Others']);

</script>
<template>
      <div class="w-full ">
            <div class=" p-8 text-white bg-slate-600 flex gap-4 justify-center items-center mx-auto">
                  <!-- <input type="text"> -->
                  <p class="text-[25px]">Newsletters</p>
                  <div class="flex items-center border rounded-[2px] overflow-hidden h-[72px] bg-white  w-[380px]">
                        <!-- Input Field -->
                        <input type="text" v-model="inputValue" placeholder="Type your message..."
                              class="w-full py-2 px-4 outline-none text-slate-500" />

                        <!-- Telegram Send Button -->
                        <button @click="sendMessage" class="btn-bg text-white p-2 mr-2 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                                    viewBox="0 0 24 24" stroke="none">
                                    <path
                                          d="M9.998 14.794L9.975 20.505C10.591 20.505 10.867 20.219 11.199 19.9L13.987 17.276L19.316 21.072C20.367 21.645 21.094 21.344 21.367 20.063L23.936 7.436L23.937 7.434C24.257 5.941 23.429 5.381 22.426 5.75L3.67 12.34C2.202 12.861 2.215 13.662 3.465 14.035L8.153 15.482L18.855 8.789C19.53 8.365 20.114 8.614 19.615 9.05L9.998 14.794Z" />
                              </svg>
                        </button>
                  </div>
            </div>
            <div  class="bg-slate-900 w-full text-center  p-8  ">
              <ul class="flex flex-col md:flex-row  my-12  gap-8 md:gap-16 justify-center">
                  <li class="text-white text-[16px] " v-for="item in categories">{{ item }}</li>
              </ul>
              <p class="text-white">&copy;2024 JS Template. Designd By Ojjomedia All Rights Reserved</p>
            </div>
      </div>
</template>