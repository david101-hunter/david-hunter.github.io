<template>
  <Particles
    id="tsparticles"
    :options="snowOptions"
  />
</template>

<script>
// Không cần import loadSnowPreset ở đây nữa vì đã làm ở main.js
export default {
  data() {
    return {
      snowOptions: {
        preset: "snow",
        // Bạn có thể tùy chỉnh thêm các options ở đây nếu muốn
        // Ví dụ: thay đổi số lượng hạt tuyết
        // particles: {
        //   number: {
        //     value: 200 // Tăng số lượng tuyết
        //   }
        // }
      }
    };
  }
};
</script>

<style scoped>
/* Bạn có thể thêm style scoped nếu cần, nhưng thường không cần cho component này */
</style>