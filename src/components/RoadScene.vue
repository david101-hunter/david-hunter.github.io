<template>
  <div class="road-scene">
    <svg viewBox="0 0 400 600" width="100%" height="100%">
      <!-- Bầu trời -->
      <rect x="0" y="0" width="400" height="600" fill="#b3e5fc"/>
      <!-- Cánh đồng -->
      <rect x="0" y="400" width="400" height="200" fill="#a7d948"/>
      <!-- Đường đi -->
      <polygon points="120,0 280,0 350,600 50,600" fill="#bdbdbd"/>
      <!-- Hàng rào trái -->
      <line x1="90" y1="400" x2="130" y2="600" stroke="#795548" stroke-width="6"/>
      <line x1="110" y1="400" x2="150" y2="600" stroke="#795548" stroke-width="6"/>
      <!-- Hàng rào phải -->
      <line x1="310" y1="400" x2="270" y2="600" stroke="#795548" stroke-width="6"/>
      <line x1="290" y1="400" x2="250" y2="600" stroke="#795548" stroke-width="6"/>
      <!-- Ngôi nhà -->
      <rect x="160" y="480" width="80" height="60" fill="#fffde7" stroke="#795548" stroke-width="3"/>
      <polygon points="160,480 200,450 240,480" fill="#ff7043"/>
      <!-- Cây bên cạnh nhà -->
      <rect x="130" y="500" width="15" height="40" fill="#8d6e63"/>
      <circle cx="137" cy="495" r="20" fill="#388e3c"/>
      <!-- Cánh đồng xa xa -->
      <ellipse cx="200" cy="580" rx="120" ry="30" fill="#c5e1a5"/>
    </svg>
  </div>
</template>

<style>
.road-scene {
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>