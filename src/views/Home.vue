<template>
  <Banner />
  <main>
    <section>
      <h1>Monte o sey Burger:</h1>
      <BurgerForm />
    </section>
  </main>
</template>

<script lang="ts">
import Banner from "@/components/Banner.vue";
import BurgerForm from "@/components/BurgerForm.vue";

export default {
  components: {
    Banner,
    BurgerForm,
  },
  name: "Home",
};
</script>
