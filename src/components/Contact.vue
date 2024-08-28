<template>
      <div class="my-carousel">
        <swiper 
          :slides-per-view="2" 
          :space-between="10" 
          :loop="true" 
          :autoplay="{ delay: 3000, disableOnInteraction: false }">
          
          <swiper-slide v-for="(item, index) in items" :key="index">
            <div class="p-4 bg-white rounded shadow-md">
              <p>{{ item }}</p>
            </div>
          </swiper-slide>
          
        </swiper>
      </div>
    </template>
    
    <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
//     import 'swiper/swiper-bundle.min.css';
    
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data() {
        return {
          items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
        };
      },
    };
    </script>
    
    <style scoped>
    .my-carousel {
      max-width: 600px;
      margin: 0 auto;
    }
    </style>
    