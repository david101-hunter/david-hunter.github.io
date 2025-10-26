<script setup>
import VsnowComponent from './components/VsnowComponent.vue'


</script>

<template>
  <VsnowComponent />
</template>

<style>
/* GHI ĐÈ CSS CỦA MẪU DỰ ÁN MẶC ĐỊNH */
/* Đảm bảo #app chiếm toàn bộ màn hình và không dùng layout grid chia cột */
#app {
  /* Hủy bỏ giới hạn chiều rộng nếu có từ main.css */
  max-width: none !important; 
  /* Đảm bảo chiếm toàn bộ chiều rộng và chiều cao */
  width: 100%; 
  min-height: 100vh;
  padding: 0 !important; /* Xóa padding mặc định */
  
  /* Vô hiệu hóa layout grid 2 cột trên desktop */
  display: block !important;
}

@media (min-width: 1024px) {
  #app {
    /* Đảm bảo display block trên desktop (ngược lại với grid) */
    display: block !important;
  }
}
</style>
