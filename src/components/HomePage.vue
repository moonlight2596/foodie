<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">

    <main class="flex flex-col justify-center items-center px-8 py-24 text-center mx-auto"> <!-- Increased from space-y-24 to space-y-32 -->
      <h2 class="text-4xl font-bold animate-fade py-24">Welcome to FoodDrop</h2>
      <p class="text-lg max-w-2xl mx-auto animate-fade-delay py-8">
        Choose your favorite delivery partner and schedule your food drop-off at your convenience. We offer a 1-hour delivery margin for better planning.
      </p>

      <div class="grid md:grid-cols-3 gap-12 max-w-2xl mx-auto animate-slide-up">
        <ServiceCard
          name="Food Panda"
          description="Popular for quick bites and local cravings."
          @select="authorizeFoodPanda"
        />
        <ServiceCard
          name="Uber Eats"
          description="Wide variety, seamless tracking, and top-notch service."
          @select="authorizeUber"
        />
        <ServiceCard name="Add More..." description="Customize this to add other services later." />
      </div>
    </main>
  </div>
</template>

<script lang=ts setup>
// import NavBar from './NavBar.vue'
import ServiceCard from './ServiceCard.vue';
import { getUberAuthUrl } from '../services/uberAuth';
import { getFoodPandaAuthUrl } from '../services/foodPandaAuth';

function authorizeUber() {
  window.location.href = getUberAuthUrl();
}

function authorizeFoodPanda() {
  const url = getFoodPandaAuthUrl();
  if (url) {
    window.location.href = url;
  }
}
</script>

<style scoped>
@keyframes fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { transform: translateY(40px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.animate-fade {
  animation: fade 1.2s ease forwards;
}

.animate-fade-delay {
  animation: fade 1.2s ease 0.4s forwards;
}

.animate-slide-up {
  animation: slide-up 1.2s ease 0.6s forwards;
}
</style>
