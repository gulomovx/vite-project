<template>
  <div class="relative w-full container mx-auto my-64  overflow-hidden">
    <!-- Feedbacks Wrapper -->
    <h1 class="font-bold text-center md:text-[39px] text-[30px] my-16">What Our Clients Say</h1>
    <div
      class="flex transition-transform duration-1000 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- Each slide displays 3 feedbacks -->
      <div
        v-for="(chunk, chunkIndex) in chunkedFeedbacks"
        :key="chunkIndex"
        class="flex flex-col md:flex-row min-w-full mb-16"
      >
        <div
          v-for="(feedback, index) in chunk"
          :key="index"
          class="w-full p-8 mb-4"
        >
          <div class="bg-white w-full text-center p-4 h-[200px]">
            <img :src="double" class="mx-auto mb-6" alt="" />
            <p class="text-lg italic mb-4">"{{ feedback.message }}"</p>
            <h4 class="text-xl font-bold">{{ feedback.author }}</h4>
            <p class="text-slate-500">CEO, Founder</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div
      class="absolute mt-32 bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <button
        v-for="(chunk, chunkIndex) in chunkedFeedbacks"
        :key="chunkIndex"
        @click="currentIndex = chunkIndex"
        :class="[
          'w-2 h-2 rounded-full relative p-2',
          currentIndex === chunkIndex ? 'btn-bg' : 'bg-slate-900',
        ]"
      >
        <div></div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import double from '../assets/double.png';

const feedbacks = ref([
  { author: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Jane Smith', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Michael Johnson', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Emily Davis', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Chris Lee', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Sarah Brown', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Sarah Brown', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Sarah Brown', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
  { author: 'Sarah Brown', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eleifend arcu vel faucibus arcu, ultrices. Id in auctor posuere nisl volutpat at laoreet.' },
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

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % chunkedFeedbacks.value.length;
};

// Automatically slide every 3 seconds
onMounted(() => {
  const interval = setInterval(nextSlide, 3000);
  onUnmounted(() => clearInterval(interval));
});
</script>

<style scoped>
/* Optional: Additional styling */
</style>
