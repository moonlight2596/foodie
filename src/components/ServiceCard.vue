<template>
  <div
    ref="card"
    class="relative overflow-hidden bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-pink-500 transition duration-300 cursor-pointer"
    :class="{ 'text-pink-400': clicked }"
    @click="handleClick"
  >
    <h3 class="text-xl font-semibold mb-2">{{ name }}</h3>
    <p class="text-sm">{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

interface Props {
  name: string
  description: string
}

defineProps<Props>()

const clicked = ref(false);
const card = ref<HTMLElement | null>(null)

function handleClick(event: MouseEvent) {
  createRipple(event);
  clicked.value = true;

  // Reset font color after 300ms
  setTimeout(() => {
    clicked.value = false;
  }, 300);
}

function createRipple(event: MouseEvent) {
  if (!card.value) return
  console.log("Ripple triggered")
  const ripple = document.createElement('span')
  const rect = card.value.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2

  ripple.className = 'ripple'
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${x}px`
  ripple.style.top = `${y}px`

  // Remove any existing ripples before appending new one
  const oldRipple = card.value.querySelector('.ripple')
  if (oldRipple) oldRipple.remove()

  card.value.appendChild(ripple)
}
</script>

<style scoped>
:deep(.ripple) {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-animation 0.6s ease-out;
  pointer-events: none;
  z-index: 1;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>

