<script setup>
import VsnowComponent from "./components/VsnowComponent.vue";
// import SnowContainer from "./components/SnowContainer.vue";
// import Snowf from 'vue-snowf';

// Cấu hình các tùy chọn cho Snowf
// const snowOptions = {
//   amount: 150,
//   size: 5,
//   speed: 1.5,
//   wind: 0.5, // Thêm chút gió
//   color: "#FFFFFF",
//   opacity: 0.9,
//   // Thư viện này dùng 'image' thay vì 'images' (là string URL, không phải array)
//   image: null,
//   zIndex: 15, // Đặt zIndex cao hơn nền (10) và thấp hơn text (20)
// };
</script>

<template>
  <div class="main-wrapper">
    <VsnowComponent />
  </div>
</template>

<!-- <style>
/* Đảm bảo App.vue và body không bị giới hạn kích thước */
body {
  margin: 0;
}
#app {
  max-width: none !important;
  width: 100%;
  min-height: 100vh;
  padding: 0 !important;
  display: block !important;
}

/* Thêm CSS cho wrapper để kiểm soát layout */
.main-wrapper {
  width: 100%;
  min-height: 100vh;
}
</style> -->
