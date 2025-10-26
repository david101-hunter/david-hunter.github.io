<template>
  <!-- Khu vực này sẽ chứa nội dung trang và component Snowf -->
  <div class="snow-area">
    
    <!-- Component Snowf sẽ được đặt ở đây (qua slot) -->
    <slot></slot> 

    <!-- Nội dung của bạn nằm ở đây, được căn giữa và nằm trên lớp tuyết -->
    <div class="content-wrapper">
      <h1 class="content-text">CHÀO MỪNG ĐẾN VỚI MÙA ĐÔNG!</h1>
    </div>
  </div>
</template>

<script setup>
// Không cần logic directive phức tạp nữa
</script>

<style scoped>
/* Thiết lập khu vực cha chiếm toàn bộ màn hình */
.snow-area {
  /* Màu nền đen hoặc tối là lý tưởng cho hiệu ứng tuyết */
  background-color: #1a202c; 
  position: relative;
  width: 100%;
  min-height: 100vh;
  
  /* Căn giữa nội dung văn bản */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Lớp bọc nội dung, đảm bảo nằm trên tuyết */
.content-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Đảm bảo nội dung luôn nằm trên lớp tuyết (Snowf component) */
  z-index: 30; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-text {
  color: white;
  font-size: 2.5rem;
  padding: 50px;
  text-align: center;
}
</style>