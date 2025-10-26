<script setup>
import VsnowComponent from "./components/VsnowComponent.vue";
</script>

<template>
  <div class="main-wrapper">
    <VsnowComponent />
    <!-- Thêm nội dung chữ vào đây -->
    <div class="content">
      <h1>CHAO MỪNG ĐẾN VỚI MÙA ĐÔNG!</h1>
    </div>
  </div>
</template>

<style>
/* Đảm bảo App.vue và body không bị giới hạn kích thước */
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* Ngăn scroll không cần thiết */
}

#app {
  /* Ghi đè các style mặc định có thể giới hạn kích thước */
  max-width: none !important;
  width: 100%;
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu là toàn màn hình */
  padding: 0 !important;
  display: block !important; /* Đảm bảo là block element để chiếm đủ không gian */
  position: relative; /* Cần thiết để z-index hoạt động */
}

/* Thêm CSS cho wrapper để kiểm soát layout */
.main-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative; /* Để VsnowComponent có thể định vị tuyệt đối bên trong */
  /* background-color: #2c3e50; */ /* Bạn có thể đặt màu nền ở đây nếu muốn */
}

/* Đảm bảo canvas của particles nằm đúng vị trí và kích thước */
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Đặt z-index thấp để nằm dưới nội dung khác */
}

/* Ví dụ nếu bạn có nội dung khác muốn đặt lên trên tuyết */
.content {
  position: relative;
  z-index: 10;
  color: white;
  text-align: center;
  padding-top: 50vh;
}
</style>
