<template>
  <div class="wrapper">
    <div class="up_block">
      <div class="up_block_left">
        <img src="../assets/logo.svg" alt="" class="img_logo" />
        <div class="block_link">
          <router-link to="/profile" class="link_music"
            ><img
              src="../assets/music/user.svg"
              class="img_link"
            />Профиль</router-link
          >
          <router-link to="/music" class="link_music"
            ><img
              src="../assets/music/music.svg"
              alt=""
              class="img_link"
            />Музыка</router-link
          >
          <router-link to="/library" class="link_music selected"
            ><img
              src="../assets/music/red/healthred.svg"
              alt=""
              class="img_link"
            />Библиотека</router-link
          >
          <router-link to="/radio" class="link_music"
            ><img
              src="../assets/music/radio.svg"
              alt=""
              class="img_link"
            />Радио</router-link
          >
        </div>
        <div></div>
      </div>
      <div class="up_block_right">
        <div class="block_like_and_music">
          <div
            class="block_music"
            v-on:click="
              changeAudio(
                require('../assets/music/music/miyagi-jendshpil-feat.-rem-digga-untouchable_1.ogg')
              )
            "
          >
            <img
              class="img_song"
              src="../assets/music/music/img/1542151853_miyagi_-_rodnaya_poi_feat__kadi_muzonov_net.jpg"
            />
            <p class="text_song">Miyagi AndyPanda - Untouchable</p>
          </div>
          <img
            src="../assets/music/red/healthred.svg"
            alt=""
            v-on:click="changeHealth()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPage",
  methods: {
    changeAudio(src) {
      let audio = document.getElementById("player");
      let text1 = document.getElementById("text1");
      let text2 = document.getElementById("text2");
      let input = document.getElementById("rangeAudio");
      audio.src = src;
      audio.play();
      input.style.display = "block";
      text1.style.display = "block";
      text2.style.display = "block";
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}
.up_block {
  display: grid;
  height: 90vh;
  width: 100%;
  grid-template-columns: 1fr 5fr;
}
.up_block_left {
  background-color: #000000;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.up_block_right {
  background-color: #101010;
  overflow: auto;
}
.img_logo {
  width: 183px;
  height: 35px;
  margin-top: 30px;
}
.link_music {
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 15px;
}
.block_link {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.img_link {
  width: 25px;
  height: 25px;
  padding-right: 15px;
}
.selected {
  color: #ff5b5b;
}
.block_like_and_music {
  display: flex;
  align-items: center;
  margin: 50px 0 0 30px;
}
.block_music {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 15px;
}
.img_song {
  width: 100px;
  height: 100px;
}
.text_song {
  font-size: 30px;
  color: #ffffff;
  padding-left: 15px;
}
</style>
