<script setup>
import data from '../../data/products.json'
import { ref, onMounted, reactive } from 'vue';
import axios from 'axios';
const products = ref(data)
console.log(products.value);
const state = reactive({
  jobs: [],
//   isLoading: true,
});
onMounted(async () => {

      try {
            const response = await axios.get('/api/jobs');
            state.jobs = response.data;
      } catch (error) {
            console.error('Error fetching jobs', error);
      } 

})
</script>
<template>
  
</template>