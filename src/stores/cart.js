// src/stores/cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(product) {
      const existingProduct = this.cartItems.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cartItems.push({ ...product, quantity: 1 });
      }
    },
    incrementQuantity(productId) {
      const product = this.cartItems.find(item => item.id === productId);
      if (product) {
        product.quantity++;
      }
    },
    decrementQuantity(productId) {
      const product = this.cartItems.find(item => item.id === productId);
      if (product && product.quantity > 1) {
        product.quantity--;
      } else {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
      }
    }
  }
});

