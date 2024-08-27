<script setup>
import { ref, onMounted, computed } from 'vue';

import {useCartStore} from '../stores/cart'
const cartStore=useCartStore()
const product = ref(null);
const quantity = ref(1);

const addToCart = () => {
  cartStore.addToCart({ ...product.value, quantity: quantity.value });
  
  
};
const products = ref([]);
const loading = ref(true);
const error = ref(null);
const showAll = ref(false);

const showAllProducts = () => {
  showAll.value = true;
};

const displayedProducts = computed(() => {
  return showAll.value ? products.value.slice(0,12) : products.value.slice(0, 3);
});

const fetchProducts = async () => {
      try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            products.value = await response.json()
            console.log(products);

      } catch (err) {
            error.value = err.message;
      } 
      return {
            products,
            loading,
            error,
            displayedProducts
            
      };
};

onMounted(() => {
      fetchProducts();
});

</script>

<template>
      <div class=" lg:mt-[700px] mt-[800px] h-auto py-24 bg-slate-100 w-full ">

            <h1 class="font-bold text-center md:text-[39px] text-[30px]">Featured Products</h1>
            <div
                  class="container  relative top-[99px] grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  md:flex-row mx-auto justify-between   items-center gap-12">

                  <div v-for="item in displayedProducts" key="item.id"
                        class="h-[405px] flex flex-col justify-between relative bg-white   bg-cover bg-center   mx-auto border shadow-md rounded-lg p-4 ">

                        <div class="group relative overflow-hidden">

                        <img class="w-[340px]  h-[247px] object-cover    rounded-lg   hover:opacity-50 "
                              :src="item.category.image" alt="">

                         <!-- hover effect -->

                         <div class="absolute rounded-lg h-full w-full bg-black/50 flex items-center justify-center gap-4 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                         <RouterLink :to="{ name: 'ProductDetail', params: { id: item.id } }">

        <button class="border border-white rounded-lg text-white py-2 px-5">Preview</button>
</RouterLink>

        <button  class="flex items-center hover:text-gray-200 btn-bg rounded-lg p-2 text-white" >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            <span class="flex absolute -mt-5 ml-4 ">
              <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75 "></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500 ">
                </span>
              </span>
          </button>

      </div>

                        </div>
                         
                        <p class="font-medium mt-">{{ item.title.substring(0, 50) }}...</p>
                        <div class="flex justify-between items-center my-4">
                        <p class="font-semibold text-[31px]">{{ item.price }}$</p>
                          <p class="text-slate-400">255 Sale</p>
                        </div>

                  </div>
            </div>

            <div class="mx-auto">
             <!-- Show All/Show Less Button -->
    <div class="text-center mt-32">
      <button 
        v-if="products.length > 3" 
        @click="showAll = !showAll" 
        class="px-6 py-2 btn-bg text-white rounded-lg">
        {{ showAll ? 'Show Less' : 'View All Products' }}
      </button>
    </div>
      </div>
      </div>
   
</template>