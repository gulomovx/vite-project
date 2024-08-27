<!-- src/components/CartPage.vue -->
<template>
  <div class="container mx-auto mt- p-4">
    <!-- <h1 class="text-2xl font-bold mb-6">Your Cart</h1> -->
    <div v-if="cartItems.length > 0" class="space-y-4">
      <router-link to="/" class="text-xl" >
        
       Shopping continue
      </router-link>
      <hr>
      <p class=""> You have {{ cartItems?.length }} item in cart</p>
      <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between p-4 border rounded-lg shadow">
        <div class="flex items-center">
          <img :src="item?.images[0]" alt="" class="w-36 h-36 object-cover rounded-lg" />
          <div class="ml-4">
            <h2 class="text-[20px] font-semibold">{{ item.title.length>12 ? item.title.substring(0,12) : item.title}}</h2>
            <p class="text-slate-600">{{ item.description?.substring(0, 20) }}...</p>
            <p class="text-gray-600">{{ item.price*item.quantity }}$</p>
            <div class="flex items-center mt-2">
              <button @click="decrementQuantity(item.id)" class="px-2 py-1 bg-gray-300 rounded">-</button>
              <span class="px-4">{{ item.quantity }}</span>
              <button @click="incrementQuantity(item.id)" class="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
          </div>
        </div>
        <div>
          <button @click="removeItem(item.id)" class="text-red-500">Remove</button>
        </div>
      </div>
      <!-- <div class="mt-6 text-right">
        <h2 class="text-xl font-bold">Total: {{ totalPrice }} USD</h2>
        <button class="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg">Checkout</button>
      </div> -->
    </div>
    <div v-else class="text-center text-gray-600">
      <p class="text-3xl mb-4">Your cart is empty.</p>
      <div class="  ">
        <RouterLink class="bg-slate-400  px-8 py-4 text-white btn-bg  mx-auto rounded-"  to="/">Back home</RouterLink>

      </div>
    </div>
  </div>
</template>

<script setup>




import { computed } from 'vue';
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const cartItems = computed(() => cartStore.cartItems);
const totalPrice = computed(() => cartStore.totalPrice);

const incrementQuantity = (productId) => {
  cartStore.incrementQuantity(productId);
};

const decrementQuantity = (productId) => {
  cartStore.decrementQuantity(productId);
};

const removeItem = (productId) => {
  cartStore.removeItem(productId);
};
</script>
