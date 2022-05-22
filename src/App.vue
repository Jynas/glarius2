<template>
  <router-view />
  <AudioPlayer
    v-if="
      currentURL === 'http://localhost:8080/music' ||
      currentURL === 'http://localhost:8080/library' ||
      currentURL === 'http://localhost:8080/radio' ||
      currentURL === 'http://localhost:8080/profile'
    "
    fileMusic="https://pub0302.101.ru:8443/stream/air/aac/64/202"
  />
</template>

<style>
body {
  margin: 0;
}
#app {
  font-family: Play;
  text-align: center;
  color: #2c3e50;
}
</style>
<script>
import AudioPlayer from "@/components/AudioPlayer";
export default {
  components: { AudioPlayer },
  data() {
    return {
      currentURL: "",
    };
  },
  created() {
    this.currentURL = window.location.href;
    console.log(window.location.href);
  },
};
</script>
