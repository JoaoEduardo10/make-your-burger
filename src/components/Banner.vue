<template>
  <section class="main-banner">
    <h1>Make your Burger</h1>
  </section>
</template>

<script lang="ts">
export default {
  name: "Banner",
};
</script>

<style scoped>
.main-banner {
  background-image: url("/images/burger.jpg");
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.main-banner h1 {
  color: #fff;
  text-align: center;
  background-color: #222;
  padding: 20px 40px;
}

@media (max-width: 415px) {
  .main-banner {
    height: 70vh;
  }

  .main-banner h1 {
    background-color: rgba(0, 0, 0, 0.6);
    font-size: 2rem;
    border-radius: 0.5rem;
  }
}
</style>
