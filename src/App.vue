<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <NavBar v-if="route.name !== 'Login'" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';

const route = useRoute();
</script>
