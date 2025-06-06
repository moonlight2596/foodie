<template>
  <header class="px-8 py-4 shadow-lg bg-gray-950">
    <nav class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">FoodDrop</h1>
      <ul class="flex space-x-6 text-sm" v-if="route.name !== 'Login'">
        <li><RouterLink to="/" class="hover:text-pink-400 transition">Home</RouterLink></li>
        <li><RouterLink to="/services" class="hover:text-pink-400 transition">Services</RouterLink></li>
        <li><RouterLink to="/contact" class="hover:text-pink-400 transition">Contact</RouterLink></li>
        <li><RouterLink to="/login" class="hover:text-pink-400 transition">Login</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
