<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex justify-center items-center px-4">
    <div class="w-full max-w-md bg-gray-950 rounded-xl p-8 shadow-lg gap-y-6">
      <h2 class="text-3xl font-bold text-center">Welcome Back</h2>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            required
            class="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            required
            class="w-full px-4 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <button
          type="submit"
          class="w-full py-2 rounded-md bg-pink-500 hover:bg-pink-600 transition text-white font-semibold"
        >
          Login
        </button>
      </form>

      <p class="text-center text-sm text-gray-400">
        Don’t have an account? <a href="#" class="text-pink-400 hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');

function handleLogin() {
  console.log('Logging in:', email.value);
  // Add actual login logic later
}
</script>
