<template>
  <div class="snowflakes">
    <div v-for="flake in flakes" :key="flake.id" :style="flake.style" class="snowflake">
      <!-- SVG snowflake -->
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M12 2 L12 22 M2 12 L22 12 M4.2 4.2 L19.8 19.8 M19.8 4.2 L4.2 19.8"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const flakes = ref([]);

function randomFlakeStyle() {
  const left = Math.random() * 100;
  const duration = 5 + Math.random() * 5;
  const delay = Math.random() * 5;
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
}

onMounted(() => {
  flakes.value = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    style: randomFlakeStyle(),
  }));
});
</script>

<style>
.snowflakes {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
  z-index: 1;
}
.snowflake {
  position: absolute;
  top: -24px;
  animation: fall linear infinite;
}
@keyframes fall {
  to {
    top: 100vh;
    opacity: 0.7;
  }
}
</style>