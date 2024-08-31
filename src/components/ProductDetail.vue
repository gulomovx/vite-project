<!-- src/components/ProductDetail.vue -->
<template>
      <!-- <div class="container w-[500px] border rounded-xl p-2 mx-auto mt-10">
        <h1 class="text-2xl font-bold mb-4">{{ product.title }}</h1>
        <img  :src="product.images?.[0]" alt="Product Image" class="w-[320px] h-[220px] md:w-full md:h-full  rounded-lg mb-4">
        <p class="text-lg mb-4">{{ product.description }}</p>
        <p class="text-xl font-semibold">Price: {{ product.price }} USD</p>
      </div> -->
      <!-- product page -->
      <div class=" container bg-white flex flex-col md:flex-row items-center justify-between ">
            <!-- img div -->
             <div class="mt-4 md:mt-12 ">
                  <img  :src="product?.images?.[0]" alt="Product Image" class="w-[380px] h-[280px] md:w-[580px] md:h-[520px]  rounded-lg mb-4">
                  
             </div>
             <!-- product data div -->
              <div class="md:w-[700px] text-center md:text-start">
                  <h1 class="md:text-[35px] text-center md:text-start text-[20px]  font-bold text-[#252C32]">{{ product?.title }}</h1>
                  <!-- <p class=""></p> -->
                  <p class="text-slate-500">{{ product?.category?.name }}</p>

                  <p class="text-slate-700 mt-4">{{ product?.description?.slice(0, 200) }}...</p>
                  <h1 class="text-[#252C32] text-[30px] font-semibold mt-4">${{ product && product?.price*quantity }}</h1>
                  <!-- incr decr -->
                  <div class="flex items-center justify-center md:justify-start gap-4">
                    <button @click="increment" class="w-[50px] text-xl bg-slate-400 rounded-lg ">+</button>
                    <h1 class="text-xl">{{ quantity }}</h1>
                    <button @click="decrement" class="w-[50px] text-xl bg-slate-400 rounded-lg">-</button>

                  </div>
                  <!-- add to cart btn -->
                   <button @click="addToCart" class="w-[200px] py-2 mt-8 rounded-xl text-white btn-bg">Add to card</button>
              </div>
      </div>



   



    </template>








    
    <script setup>

    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import {useCartStore} from '../stores/cart'
    import 'vue3-toastify/dist/index.css'
    import {toast} from 'vue3-toastify'
    const product = ref(null);
    const route = useRoute();
    const quantity = ref(1);
    const cartStore = useCartStore();
    
    // toast
   
      
    const increment = () => {
  quantity.value++;
};

window.scrollBy(0, {
      behaviour: 'smooth'
})

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const addToCart = () => {
  toast('Item added to cart',{
        autoClose:2000
      })
  cartStore.addToCart({ ...product.value, quantity: quantity.value });
  
  
};

    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${route.params.id}`);
        product.value = await response.json();
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    
    onMounted(() => {
      fetchProduct();
    });
    </script>
    