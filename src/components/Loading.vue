<template>
  <div class="Loading">
    <div></div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Loading",
};
</script>

<style scoped>
.Loading {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Loading div {
  width: 100px;
  height: 100px;
  border: 9px solid #fcba03;
  border-radius: 50%;
  border-top: 9px solid transparent;
  animation: animationI 1s ease-in-out infinite;
}

@keyframes animationI {
  0% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>
