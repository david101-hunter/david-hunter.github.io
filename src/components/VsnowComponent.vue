<template>
  <!-- Khu vực bao bọc cả ứng dụng, đảm bảo có chiều cao (ví dụ: 100vh) -->
  <div class="snow-area">
    
    <!-- Directive v-snow: Cần có class để thiết lập kích thước -->
    <!-- CHỈ GIỮ LẠI DIRECTIVE: Khắc phục lỗi "Cannot read properties of undefined (reading '_init')" -->
    <div v-snow="snowOptions" class="snow-layer">
      <!-- Nội dung của bạn nằm ở đây -->
      <h1 class="content-text">CHÀO MỪNG ĐẾN VỚI MÙA ĐÔNG!</h1>
    </div>

    <!-- 
    Đã loại bỏ Component VSnow vì lỗi Uncaught TypeError: Cannot read properties of undefined (reading '_init').
    Directive v-snow hiện tại đã đủ để tạo hiệu ứng tuyết rơi toàn màn hình.
    -->

  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Khai báo options cho v-snow
const snowOptions = reactive({
  density: 100, // Tăng density lên 100 để dễ nhìn hơn
  fall_speed: 4,
  size: 10,
  color: "#FFFFFF",
  opacity: 1,
  images: [] 
});
</script>

<style scoped>
/* QUAN TRỌNG: Cần có CSS để tuyết có không gian rơi */

.snow-area {
  /* Thiết lập khu vực cha có chiều cao tối thiểu */
  min-height: 100vh; 
  background-color: #1a202c; 
  position: relative; /* Quan trọng để .snow-layer là con của nó */
}

/* KHU VỰC V-SNOW: Phải có kích thước và vị trí để canvas hiển thị */
.snow-layer {
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Chiếm toàn bộ khu vực cha */
  z-index: 10;
}

.content-text {
  color: white;
  font-size: 2.5rem;
  padding: 50px;
  text-align: center;
}
</style>