<template>
  <NaveBar :logo="logo_src" :alt="name_logo" />
  <Footer />
</template>

<script lang="ts">
import NaveBar from "./components/NaveBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NaveBar,
    Footer,
  },

  data() {
    return {
      logo_src: "/images/logo.png",
      name_logo: "meka your burger",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  margin: 50px;
  height: 100%;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 40px;
  color: #222;
}
</style>
