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
  return {
            products,
            loading,
            error,
            displayedProducts
            
      };
};

const displayedProducts = computed(() => {
  return showAll.value ? products.value : products.value.slice(0, 3);
});

onMounted(() => {
  fetchProducts();
});
</script>
