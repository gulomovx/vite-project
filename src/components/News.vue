<template>
      <div class="relative w-full container  mx-auto mb-36 overflow-hidden">
        <!-- Feedbacks Wrapper -->
        <h1 class="font-bold text-center md:text-[39px] text-[30px] md:my-16">Latest News</h1>
        <div 
          class="flex transition-transform duration-700 ease-in-out "
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <!-- Each slide displays 3 feedbacks -->
          <div 
            v-for="(chunk, chunkIndex) in chunkedFeedbacks"
            :key="chunkIndex"
            class="flex flex-col md:flex-row  min-w-full mb-8"
          >
            <div 
              v-for="(feedback, index) in chunk"
              :key="index"
              class="w-full p-8 flex flex-col md:flow-row  justify-between  "
            >
              <div class="bg-white border shadow-lg rounded-lg p-4 h-[400px] ">
                  <img class="mx-auto w-full" :src="feedback.img" alt="news">
                  <!-- date & author -->
                <div class=" w-full flex text-[16px] mt-2 justify-between">
                 <div class="flex ">
                  <img class="size-[18px]" :src="clock" alt="">
                   <p class="text-slate-500">05, July, 2024</p>
                 </div>

                 <div class="flex">
                  <img class="size-[18px]" :src="author" alt="">
                   <p class="text-slate-500">Cristofer Westervelt</p>
                 </div>
                </div>
                  <p class="text-[20px] font-semibold mt-6 ">"{{ feedback.message }}"</p>
                <!-- <h4 class="text-xl font-bold">{{ feedback.author }}</h4> -->
              </div>
            </div>
          </div>
        </div>
    
        <!-- Navigation Dots -->
        <div class="absolute   bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button 
            v-for="(chunk, chunkIndex) in chunkedFeedbacks" 
            :key="chunkIndex"
            :class="[
              'w-3 h-3 rounded-full p-2',
              currentIndex === chunkIndex ? 'btn-bg' : 'bg-slate-900'
            ]"
            @click="currentIndex = chunkIndex"
          ></button>
        </div>
    
        <!-- Navigation Buttons -->
       
    
        
      </div>
    </template>
    
    <script setup>
    import { ref, computed } from 'vue';
    import news from '../../public/news.png'
    import author from '../assets/user.svg'
    import clock from '../assets/clock.svg'
    const feedbacks = ref([
      { author: 'John Doe', message: 'This product has completely transformed our business!', time:'05, July, 2024', img:news },
      { author: 'Jane Smith', message: 'Excellent customer service and very reliable product.', time:'05, July, 2024', img:news },
      { author: 'Michael Johnson', message: 'The features offered are unmatched by any other solution.', time:'05, July, 2024',img:news },
      { author: 'Emily Davis', message: 'Great value for the price, will definitely recommend!', time:'05, July, 2024', img:news },
      { author: 'Chris Lee', message: 'A must-have tool for anyone in the industry.' , time:'05, July, 2024',img:news},
      { author: 'Sarah Brown', message: 'Top-notch quality and fantastic support.',time:'05, July, 2024' ,img:news},
    ]);
    
    const chunkedFeedbacks = computed(() => {
      const chunkSize = 3;
      let result = [];
      for (let i = 0; i < feedbacks.value.length; i += chunkSize) {
        result.push(feedbacks.value.slice(i, i + chunkSize));
      }
      return result;
    });
    
    const currentIndex = ref(0);
    
    const prevSlide = () => {
      currentIndex.value = (currentIndex.value - 1 + chunkedFeedbacks.value.length) % chunkedFeedbacks.value.length;
    };
    
    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % chunkedFeedbacks.value.length;
    };
    </script>
    
   
    