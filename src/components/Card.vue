<script setup>
import { ref, onMounted, computed } from 'vue';

const products = ref([]);
const loading = ref(true);
const error = ref(null);
const showAll = ref(false);

const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    products.value = await response.json();
    console.log(products);
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
};

const displayedProducts = computed(() => {
  return showAll.value ? products.value : products.value.slice(0, 3);
});

onMounted(() => {
  fetchProducts();
});
</script>


<template>
    <div class="mt-10 bg-white w-full">
      <h1 class="font-bold text-center text-3xl mb-8 bg-red-800">Featured Productsssss</h1>
      
      <!-- Products Grid -->
      <div class="container grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        <div 
          v-for="item in products" 
          :key="item.id"
          class="relative bg-white border shadow-md rounded-lg p-4">
          <RouterLink :to="{ name: 'ProductDetail', params: { id: item.id } }">

          <div class="group relative overflow-hidden">
            <img 
              class="w-full h-64 object-cover rounded-lg" 
              :src="item.category.image" 
              alt="Product Image">
            
            <!-- Hover effect -->
            <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <!-- <button class="bg-white text-black py-2 px-4 rounded-lg">Preview</button> -->
              
            </div>
          </div>
        </RouterLink>
          
          <p class="font-medium mt-2">{{ item.title.substring(0, 20) }}...</p>
          <div class="flex justify-between items-center my-4">
            <p class="font-semibold text-lg">{{ item.price }}$</p>
            <p class="text-gray-500">255 Sales</p>
          </div>
        </div>
      </div>
      
      <!-- Show All/Show Less Button -->
      <div class="text-center mt-6">
        <button 
          v-if="products.length > 3" 
          @click="showAll = !showAll" 
          class="px-6 py-2 bg-blue-500 text-white rounded-lg">
          {{ showAll ? 'Show Less' : 'View All' }}
        </button>
      </div>
    </div>
  </template>
  