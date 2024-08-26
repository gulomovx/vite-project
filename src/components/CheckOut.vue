<template>
      <div class="w-full container">
        <h1 class="font-bold text-center md:text-[39px] text-[30px] my-16">Let’ssss Check Out News Product Theme Templates & Plugin</h1>
    
        <!-- Navbar-like category list -->
        <ul class="flex justify-between items-center md:my-8 border rounded-lg p-2 flex-wrap">
          <li
            v-for="category in categories"
            :key="category"
            :class="[
              'cursor-pointer px-4 py-2 rounded-lg my-2 md:my-0',
              selectedCategory === category ? 'btn-bg' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            ]"
            @click="selectCategory(category)"
          >
            {{ category }}
          </li>
        </ul>
    
        <div v-if="filteredProducts.length" class="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          <div v-for="item in displayedProducts" :key="item.id" class="product-card mx-auto border rounded-lg p-4">
            <div class="group relative overflow-hidden">
              <img class="w-[320px] h-[220px] object-cover rounded-lg hover:opacity-50" :src="item.images?.[0]" alt="">
              <!-- Hover effect -->
              <div class="absolute rounded-lg h-full w-full bg-black/50 flex items-center justify-center gap-4 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <!-- <button class="border border-white rounded-lg text-white py-2 px-5">Preview</button> -->
                <RouterLink :to="{ name: 'ProductDetail', params: { id: item.id } }">

<button class="border border-white rounded-lg text-white py-2 px-5">Preview</button>
</RouterLink>
                <a class="flex items-center hover:text-gray-200 bg-gradient-to-tr from-red-500 to-teal-500 rounded-lg p-2 text-white" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span class="flex absolute -mt-5 ml-4">
                    <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a>
              </div>
            </div>
            <h3>{{ item.title.substring(0, 30) }}...</h3>
            <p>{{ item.price }} USD</p>
          </div>
        </div>
        <div v-else class="font-bold text-center md:text-[39px] text-[30px] my-16">
          No products available.
        </div>
    
        <!-- View all products button -->
        <div class="text-center mt-32">
          <button 
            v-if="filteredProducts.length > 8" 
            @click="showAll = !showAll" 
            class="px-6 py-2 bg-gradient-to-tr from-red-700 to-teal-500 text-white rounded-lg">
            {{ showAll ? 'Show Less' : 'View All Products' }}
          </button>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref, onMounted, computed } from 'vue';
    
    const products = ref([]);
    const filteredProducts = ref([]);
    const selectedCategory = ref('');
    const showAll = ref(false);
    
    // Predefined categories list
    const categories = ref(['All', 'Clothes', 'Electronics', 'Furniture', 'Shoes', 'Others']);
    
    // Display either 8 products or all products based on `showAll` flag
    const displayedProducts = computed(() => {
      return showAll.value ? filteredProducts.value : filteredProducts.value.slice(0, 8);
    });
    
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        products.value = data;
        filterProducts();
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    const selectCategory = (category) => {
      selectedCategory.value = category;
      filterProducts();
    };
    
    const filterProducts = () => {
      if (selectedCategory.value === 'All' || !selectedCategory.value) {
        filteredProducts.value = products.value;
      } else {
        filteredProducts.value = products.value.filter(product =>
          product.category.name === selectedCategory.value
        );
      }
    };
    
    onMounted(() => {
      fetchProducts();
    });
    </script>
    
    
    