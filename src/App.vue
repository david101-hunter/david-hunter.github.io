<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import VsnowComponent from "./components/VsnowComponent.vue";
import ButterflyEffect from "./components/ButterflyEffect.vue";
import PhuongFlowerEffect from "./components/PhuongFlowerEffect.vue";
import SunSparkleEffect from "./components/SunSparkleEffect.vue";
import AutumnLeafEffect from "./components/AutumnLeafEffect.vue";

const mainWrapper = ref(null);
const springSection = ref(null);
const summerSection = ref(null);
const autumnSection = ref(null);
const showSnow = ref(true);
const showButterfly = ref(false);
const showPhuongFlower = ref(false);
const showSunSparkle = ref(false);
const showAutumnLeaf = ref(false);

function handleScroll() {
  const springRect = springSection.value.getBoundingClientRect();
  const summerRect = summerSection.value.getBoundingClientRect();
  const autumnRect = autumnSection.value.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  if (autumnRect.top < viewportHeight / 2 && autumnRect.bottom > viewportHeight / 2) {
    mainWrapper.value.style.backgroundColor = "#c97b4d"; // Mùa thu (cam vàng)
    showSnow.value = false;
    showButterfly.value = false;
    showPhuongFlower.value = false; // Removed duplicate import
    showSunSparkle.value = false; // Removed duplicate import
      showAutumnLeaf.value = true;
  } else if (summerRect.top < viewportHeight / 2 && summerRect.bottom > viewportHeight / 2) {
    mainWrapper.value.style.backgroundColor = "#fde68a"; // Mùa hạ
    showSnow.value = false;
    showButterfly.value = false;
    showPhuongFlower.value = true;
    showSunSparkle.value = true;
      showAutumnLeaf.value = false;
  } else if (springRect.top < viewportHeight / 2 && springRect.bottom > viewportHeight / 2) {
    mainWrapper.value.style.backgroundColor = "#a7f3d0"; // Mùa xuân
    showSnow.value = false;
    showButterfly.value = true;
    showPhuongFlower.value = false;
    showSunSparkle.value = false;
      showAutumnLeaf.value = false;
  } else {
    // Removed duplicate imports
      showAutumnLeaf.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // Removed duplicate ref declarations
  handleScroll(); // Call handleScroll initially
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="main-wrapper" ref="mainWrapper">
    <ButterflyEffect v-if="showButterfly" />
    <PhuongFlowerEffect v-if="showPhuongFlower" />
    <SunSparkleEffect v-if="showSunSparkle" />
    <AutumnLeafEffect v-if="showAutumnLeaf" />
    <!-- Phần Mùa Đông -->
    <section class="winter-section">
      <VsnowComponent v-if="showSnow" />
      <div class="content">
        <h1>Chào mừng bạn!</h1>
        <p>Đây là hiệu ứng tuyết rơi.</p>
        <img
          src="https://m.yodycdn.com/products/hinhanhmuadongyody_m2lccx7xu67u8dabm1.jpg"
          alt="Cây cối mùa xuân đang nảy mầm"
          class="spring-image"
        />
      </div>
    </section>

    <!-- Phần Mùa Xuân -->
    <section class="spring-section" ref="springSection">
      <h2>Mùa xuân đến rồi!</h2>
      <p>Cây cối đâm chồi, nảy lộc...</p>
      <img
        src="https://lh4.googleusercontent.com/proxy/8Ah2z6LmvH3e8d0b467ruWBOpg4Idj9vpXxwRLdGgF8AOlZrbGrJ6Q6nVLW9uNSF5IDxRj1o9IIccOqaZCkjoyi633TjY6BOFlVlCH4Jd4GlPmVxE-Z4DQpylAUbXf68kdyJPk3z_GQ"
        alt="Cây cối mùa xuân đang nảy mầm"
        class="spring-image"
      />
    </section>

    <!-- Phần Mùa Hạ -->
    <section class="summer-section" ref="summerSection">
      <h2>Mùa hạ rực rỡ!</h2>
      <p>Ánh nắng vàng, hoa phượng đỏ...</p>
      <img
        src="https://images2.thanhnien.vn/528068263637045248/2023/5/25/photo-1685005558286-16850055585611811171331.png"
        alt="Mùa hạ rực rỡ"
        class="spring-image"
      />
    </section>

    <!-- Phần Mùa Thu -->
    <section class="autumn-section" ref="autumnSection">
      <h2>Mùa thu dịu dàng!</h2>
      <p>Lá vàng rơi, trời trong xanh...</p>
      <img
        src="https://hoangphucphoto.com/wp-content/uploads/2023/12/anh-thu-1.jpeg"
        alt="Mùa thu dịu dàng"
        class="spring-image"
      />
    </section>
  </div>
</template>
<style>

#app {
  max-width: none;
  width: 100%;
  /* Gỡ bỏ height: 100% */
  padding: 0;
  display: block;
}

/* Wrapper chính */
.main-wrapper {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #2c3e50; /* Màu mùa đông mặc định */
  transition: background-color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-sizing: border-box;
}

/* Phần Mùa Đông */
.winter-section {
  height: 100vh; /* Chiếm toàn bộ màn hình đầu tiên */
  position: relative; /* Để chứa các thành phần con absolute */
  display: flex; /* Dùng flex để căn giữa .content */
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden; /* Đảm bảo tuyết không tràn ra ngoài section này */
}

/* Canvas tuyết nằm trong phần Mùa Đông */
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/* Nội dung chữ trong phần Mùa Đông */
.content {
  position: relative; /* Để z-index hoạt động */
  z-index: 10;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

.content h1 {
  margin-bottom: 10px;
  font-size: 2.5em;
}

.content p {
  font-size: 1.2em;
}

.scroll-down-hint {
  margin-top: 20px;
  font-size: 1em;
  opacity: 0.7;
}

/* Phần Mùa Xuân */
.spring-section {
  min-height: 100vh; /* Chiều cao tối thiểu, có thể dài hơn */
  padding: 60px 20px;
  /* KHÔNG đặt background-color ở đây */
  color: #1f2937; /* Màu chữ tối */
  text-align: center;
  display: block; /* Đảm bảo nó hiển thị */
}

.spring-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
}

.spring-section p {
  font-size: 1.1em;
  margin-bottom: 30px;
}

/* Style cho thẻ img */
.spring-image {
  display: block; /* Để margin auto hoạt động */
  width: 80%;
  max-width: 600px;
  height: auto; /* Chiều cao tự động theo tỷ lệ ảnh */
  margin: 20px auto; /* Căn giữa ảnh và thêm khoảng cách trên dưới */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Thêm bóng đổ nhẹ */
}

/* Phần Mùa Hạ */
.summer-section {
  min-height: 100vh;
  padding: 60px 20px;
  color: #7c4700;
  text-align: center;
  display: block;
}
.summer-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
}
.summer-section p {
  font-size: 1.1em;
  margin-bottom: 30px;
}

/* Phần Mùa Thu */
.autumn-section {
  min-height: 100vh;
  padding: 60px 20px;
  color: #92400e;
  text-align: center;
  display: block;
}
.autumn-section h2 {
  font-size: 2.2em;
  margin-bottom: 20px;
}
.autumn-section p {
  font-size: 1.1em;
  margin-bottom: 30px;
}
body {
  font-family: sans-serif;
  scroll-behavior: smooth; /* Cuộn mượt (tùy chọn) */
}
</style>
