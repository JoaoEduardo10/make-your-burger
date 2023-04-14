<template>
  <main>
    <h1>Gerenciar pedidos:</h1>
    <Deshboard />
  </main>
</template>

<script lang="ts">
import Deshboard from "@/components/Deshboard.vue";

export default {
  name: "Pedidos",
  components: {
    Deshboard,
  },
};
</script>

<style scoped>
main {
  min-height: 70vh;
}
</style>
