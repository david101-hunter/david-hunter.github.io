import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Particles from "particles.vue3";
// Import the main tsParticles instance from the v2 engine
import { tsParticles } from "tsparticles-engine";
// Import the preset loading function from the correct v2 package
import { loadSnowPreset } from "tsparticles-preset-snow";

async function initializeApp() {
  // Load the snow preset using the main tsParticles v2 instance
  await loadSnowPreset(tsParticles);

  // Tạo và mount ứng dụng Vue, đăng ký plugin Particles
  createApp(App).use(Particles).mount('#app');
}

initializeApp();