<template>
  <div id="app">
    <LogoSpotify />
    <MainSpotify :url="apiUrl" />
  </div>
</template>

<script>
import LogoSpotify from "./components/LogoSpotify.vue";
import MainSpotify from "./components/MainSpotify.vue";

export default {
  name: "App",
  components: {
    LogoSpotify,
    MainSpotify,
  },
  data() {
    return {
      apiUrl: "https://flynn.boolean.careers/exercises/api/array/music",
    };
  },
};
</script>

<style lang="scss">
@import "@/style/root";
</style>
