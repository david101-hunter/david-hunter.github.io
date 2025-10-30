<template>
  <div class="phuong-flower-effect">
    <svg v-for="petal in petals" :key="petal.id"
         :style="{ position: 'absolute', left: petal.x + 'px', top: petal.y + 'px', transform: `scale(${petal.size}) rotate(${petal.angle}deg)` }"
         width="48" height="48" viewBox="0 0 48 48">
      <defs>
        <radialGradient :id="'leafGradient' + petal.id" cx="50%" cy="50%" r="50%">
          <stop offset="0%" :stop-color="petal.color" />
          <stop offset="100%" stop-color="#fff3e0" />
        </radialGradient>
      </defs>
      <g>
        <path
          d="M24 44 L28 32 L40 30 L30 24 L44 16 L30 14 L40 4 L28 8 L24 0 L20 8 L8 4 L18 14 L4 16 L18 24 L8 30 L20 32 Z"
          :fill="'url(#leafGradient' + petal.id + ')'"
          stroke="#c97b4d"
          stroke-width="1.5"
        />
        <path d="M24 0 L24 44" stroke="#c97b4d" stroke-width="1" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'PhuongFlowerEffect',
  data() {
    return {
      petals: []
    };
  },
  mounted() {
    this.createPetals(18);
    this.animate();
  },
  methods: {
    createPetals(n) {
      const colors = [
        '#f9d776', // vàng
        '#f7a94b', // cam nhạt
        '#f76c3c', // cam đậm
        '#e53935', // đỏ
        '#ff7043'  // đỏ cam
      ];
      for (let i = 0; i < n; i++) {
        this.petals.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 0.7,
          dy: 1 + Math.random() * 1.5,
          angle: Math.random() * 360,
          dAngle: (Math.random() - 0.5) * 1.2,
          size: 0.7 + Math.random() * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    },
    animate() {
      setInterval(() => {
        this.petals.forEach(petal => {
          petal.x += petal.dx;
          petal.y += petal.dy;
          petal.angle += petal.dAngle;
          // Reset if out of screen
          if (petal.y > window.innerHeight) {
            petal.x = Math.random() * window.innerWidth;
            petal.y = -36;
            petal.color = this.randomColor();
          }
        });
      }, 30);
    },
    randomColor() {
      const colors = [
        '#f9d776', '#f7a94b', '#f76c3c', '#e53935', '#ff7043'
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
};
</script>

<style scoped>
.phuong-flower-effect {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
}
</style>
