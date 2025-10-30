<template>
  <div class="sun-sparkle-effect">
    <svg v-for="sparkle in sparkles" :key="sparkle.id"
         :style="{ position: 'absolute', left: sparkle.x + 'px', top: sparkle.y + 'px', opacity: sparkle.opacity, transform: `scale(${sparkle.size})` }"
         width="24" height="24" viewBox="0 0 24 24">
      <!-- Sun sparkle shape -->
      <circle cx="12" cy="12" r="5" fill="#ffe066" />
      <g>
        <line x1="12" y1="2" x2="12" y2="7" stroke="#ffd700" stroke-width="2" />
        <line x1="12" y1="17" x2="12" y2="22" stroke="#ffd700" stroke-width="2" />
        <line x1="2" y1="12" x2="7" y2="12" stroke="#ffd700" stroke-width="2" />
        <line x1="17" y1="12" x2="22" y2="12" stroke="#ffd700" stroke-width="2" />
        <line x1="5" y1="5" x2="8" y2="8" stroke="#ffd700" stroke-width="1.5" />
        <line x1="19" y1="19" x2="16" y2="16" stroke="#ffd700" stroke-width="1.5" />
        <line x1="5" y1="19" x2="8" y2="16" stroke="#ffd700" stroke-width="1.5" />
        <line x1="19" y1="5" x2="16" y2="8" stroke="#ffd700" stroke-width="1.5" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'SunSparkleEffect',
  data() {
    return {
      sparkles: []
    };
  },
  mounted() {
    this.createSparkles(14);
    this.animate();
  },
  methods: {
    createSparkles(n) {
      for (let i = 0; i < n; i++) {
        this.sparkles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          size: 0.7 + Math.random() * 0.6,
          opacity: 0.7 + Math.random() * 0.3
        });
      }
    },
    animate() {
      setInterval(() => {
        this.sparkles.forEach(sparkle => {
          sparkle.x += sparkle.dx;
          sparkle.y += sparkle.dy;
          // Đảo chiều nếu chạm biên
          if (sparkle.x < 0 || sparkle.x > window.innerWidth - 24) sparkle.dx *= -1;
          if (sparkle.y < 0 || sparkle.y > window.innerHeight - 24) sparkle.dy *= -1;
        });
      }, 40);
    }
  }
};
</script>

<style scoped>
.sun-sparkle-effect {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 2;
}
</style>
