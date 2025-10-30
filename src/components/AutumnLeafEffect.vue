<template>
  <div class="autumn-leaf-effect">
    <svg v-for="leaf in leaves" :key="leaf.id"
         :style="{ position: 'absolute', left: leaf.x + 'px', top: leaf.y + 'px', transform: `scale(${leaf.size}) rotate(${leaf.angle}deg)` }"
         width="36" height="36" viewBox="0 0 36 36">
      <!-- Realistic autumn leaf SVG -->
      <g>
        <path d="M18 4 Q22 10, 32 18 Q22 26, 18 32 Q14 26, 4 18 Q14 10, 18 4" fill="#f9d776" stroke="#c97b4d" stroke-width="1.5" />
        <path d="M18 4 Q18 18, 18 32" stroke="#c97b4d" stroke-width="1" fill="none" />
        <path d="M18 18 Q24 20, 32 18" stroke="#c97b4d" stroke-width="0.7" fill="none" />
        <path d="M18 18 Q12 20, 4 18" stroke="#c97b4d" stroke-width="0.7" fill="none" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'AutumnLeafEffect',
  data() {
    return {
      leaves: []
    };
  },
  mounted() {
    this.createLeaves(16);
    this.animate();
  },
  methods: {
    createLeaves(n) {
      for (let i = 0; i < n; i++) {
        this.leaves.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          dx: (Math.random() - 0.5) * 0.7,
          dy: 1 + Math.random() * 1.2,
          angle: Math.random() * 360,
          dAngle: (Math.random() - 0.5) * 1.2,
          size: 0.7 + Math.random() * 0.5
        });
      }
    },
    animate() {
      setInterval(() => {
        this.leaves.forEach(leaf => {
          leaf.x += leaf.dx;
          leaf.y += leaf.dy;
          leaf.angle += leaf.dAngle;
          // Reset if out of screen
          if (leaf.y > window.innerHeight) {
            leaf.x = Math.random() * window.innerWidth;
            leaf.y = -36;
          }
        });
      }, 30);
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
