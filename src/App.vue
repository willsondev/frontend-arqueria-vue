<template>
  <div>

    <Header />
      
    <div v-if="!hideMainViewAndFooter" class="container mx-auto text-center mt-8 px-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
        Clases de Arquería
      </h1>
    </div>
 
    <!-- Vista principal -->
    <router-view class="mt-5" />
   

  
    <MainView v-if="!hideMainViewAndFooter" />
    <Footer v-if="!hideMainViewAndFooter" />

  
    <transition name="fade-slide">
      <div v-if="isButtonVisible && !hideMainViewAndFooter" class="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center">
        <button @click="scrollToFooter" class="bg-white hover:bg-green-600 text-black font-semibold p-3 rounded-full shadow-lg transition ease-in-out duration-300 flex items-center justify-center">
          <ArrowDownIcon class="h-6 w-6 text-black" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MainView from './components/MainView.vue';
import { ArrowDownIcon } from '@heroicons/vue/24/solid';


const isButtonVisible = ref(true);


const scrollToFooter = () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: 'smooth' });
  }
};


const handleScroll = () => {
  isButtonVisible.value = window.scrollY < 200; 
};


const handleClick = () => {
  isButtonVisible.value = false;
};


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


const route = useRoute();

const hideMainViewAndFooter = computed(() => {
  return ['/login', '/register', '/classes', '/reservations', '/admin','/instructores', '/futuros-instructores'].includes(route.path);
});
</script>

<style scoped>

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}


.fade-slide-footer-enter-active,
.fade-slide-footer-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-slide-footer-enter,
.fade-slide-footer-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
