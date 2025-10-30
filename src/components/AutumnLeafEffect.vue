<template>
  <div class="autumn-leaf-effect">
    <svg v-for="wind in winds" :key="wind.id"
         :style="{ position: 'absolute', left: wind.x + 'px', top: wind.y + 'px', opacity: 0.6 }"
         :width="wind.length" height="120" :viewBox="`0 0 ${wind.length} 400`">
      <g>
        <path :d="`M0,200 C${wind.length/3},120 ${wind.length*2/3},280 ${wind.length},200`" fill="none" :stroke="wind.color" stroke-width="1.2" stroke-linecap="round" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AutumnLeafEffect',
  data() {
    return {
      winds: []
    };
  },
  mounted() {
  this.createWinds(10);
    this.animate();
  },
  methods: {
    createWinds(n) {
      const colors = [
        '#fff',
        '#e0e7ef',
        '#b3c6e7',
        '#cfe2f3',
        '#f9e7b7',
        '#e7d7f9',
        '#f9d7e7',
        '#d7f9e7',
        '#f7f7f7',
        '#f7e7f9'
      ];
      const windLength = Math.round(window.innerWidth * 1.7);
      const gap = Math.round(windLength / n);
      for (let i = 0; i < n; i++) {
        this.winds.push({
          id: i,
          x: -windLength + i * gap,
          y: Math.random() * (window.innerHeight - 120),
          speed: 4.2 + Math.random() * 2.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          length: windLength
        });
      }
    },
    animate() {
      setInterval(() => {
  const windLength = Math.round(window.innerWidth * 1.7);
        const activeWinds = this.winds.length;
        const gap = Math.round(windLength / activeWinds);
        this.winds.forEach((wind, idx) => {
          wind.x += wind.speed;
          wind.y += Math.sin(Date.now()/500 + wind.id) * 0.7;
          wind.length = windLength;
          if (wind.x > window.innerWidth) {
            wind.x = -windLength + idx * gap;
            wind.y = Math.random() * (window.innerHeight - 120);
            // Đổi màu cho đa dạng
            const colors = [
              '#fff', '#e0e7ef', '#b3c6e7', '#cfe2f3', '#f9e7b7', '#e7d7f9', '#f9d7e7', '#d7f9e7', '#f7f7f7', '#f7e7f9'
            ];
            wind.color = colors[Math.floor(Math.random() * colors.length)];
          }
        });
      }, 24);
    }
  }
};
</script>

<style scoped>
.autumn-leaf-effect {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}
</style>
