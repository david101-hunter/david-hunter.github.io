<template>
  <Particles id="tsparticles" :options="snowOptions" />
</template>
<script>


export default {
  data() {
    return {
      snowOptions: {
        preset: "snow"
      }
    };
  }
};
</script>
