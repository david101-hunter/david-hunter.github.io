<template>
  <div class="butterfly-effect">
    <svg v-for="butterfly in butterflies" :key="butterfly.id"
         :style="{ position: 'absolute', left: butterfly.x + 'px', top: butterfly.y + 'px', transform: `scale(${butterfly.size}) rotate(${butterfly.angle}deg)` }"
         width="48" height="48" viewBox="0 0 48 48">
      <!-- Realistic butterfly SVG -->
      <g>
        <!-- Left wing -->
        <path d="M24 24 Q8 8, 12 32 Q18 38, 24 24" fill="#f7c873" stroke="#b8860b" stroke-width="1.5" />
        <ellipse cx="15" cy="20" rx="6" ry="12" fill="#f7c873" opacity="0.7" />
        <circle cx="15" cy="20" r="2" fill="#b8860b" />
        <!-- Right wing -->
        <path d="M24 24 Q40 8, 36 32 Q30 38, 24 24" fill="#7ed6a2" stroke="#388e3c" stroke-width="1.5" />
        <ellipse cx="33" cy="20" rx="6" ry="12" fill="#7ed6a2" opacity="0.7" />
        <circle cx="33" cy="20" r="2" fill="#388e3c" />
        <!-- Body -->
        <rect x="22" y="18" width="4" height="12" rx="2" fill="#4e342e" />
        <!-- Head -->
        <circle cx="24" cy="16" r="3" fill="#4e342e" />
        <!-- Antennae -->
        <path d="M24 16 Q22 10, 20 14" stroke="#4e342e" stroke-width="1" fill="none" />
        <path d="M24 16 Q26 10, 28 14" stroke="#4e342e" stroke-width="1" fill="none" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'ButterflyEffect',
  data() {
    return {
      butterflies: []
    };
  },
  mounted() {
    this.createButterflies(10);
    this.animate();
  },
  methods: {
    createButterflies(n) {
      for (let i = 0; i < n; i++) {
        this.butterflies.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 1.5,
          angle: Math.random() * 360,
          dAngle: (Math.random() - 0.5) * 2,
          size: 0.7 + Math.random() * 0.6
        });
      }
    },
    animate() {
      setInterval(() => {
        this.butterflies.forEach(butterfly => {
          butterfly.x += butterfly.dx;
          butterfly.y += butterfly.dy;
          butterfly.angle += butterfly.dAngle;
          // Bounce off edges
          if (butterfly.x < 0 || butterfly.x > window.innerWidth - 40) butterfly.dx *= -1;
          if (butterfly.y < 0 || butterfly.y > window.innerHeight - 40) butterfly.dy *= -1;
        });
      }, 30);
    }
  }
};
</script>

<style scoped>
.butterfly-effect {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}
</style>
