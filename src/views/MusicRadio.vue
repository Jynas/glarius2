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
          <router-link to="/library" class="link_music"
            ><img
              src="../assets/music/health.svg"
              alt=""
              class="img_link"
            />Библиотека</router-link
          >
          <router-link to="/radio" class="link_music selected"
            ><img
              src="../assets/music/red/radiored.svg"
              alt=""
              class="img_link"
            />Радио</router-link
          >
        </div>
        <div></div>
      </div>
      <div class="up_block_right">
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio('https://pub0302.101.ru:8443/stream/air/aac/64/202')
          "
        >
          <img src="../assets/radio/logo-comedy-radio.png" class="logo_radio" />
          <p class="text_radio">Comedy Radio</p>
        </div>
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio('https://chanson.hostingradio.ru:8041/chanson256.mp3')
          "
        >
          <img
            src="../assets/radio/logo-radio-shanson.png"
            class="logo_radio"
          />
          <p class="text_radio">Радио Шансон</p>
        </div>
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio('https://pub0202.101.ru:8443/stream/air/aac/64/99')
          "
        >
          <img src="../assets/radio/logo-radio-nrj.jpg" class="logo_radio" />
          <p class="text_radio">Радио Energy</p>
        </div>
        <div
          class="block_radio"
          v-on:click="ChangeRadio('https://stream.zeno.fm/7w72va6s7k0uv')"
        >
          <img
            src="../assets/radio/ab67616d0000b273cf37f3331be39162f836d371.jpeg"
            class="logo_radio"
          />
          <p class="text_radio">LoFi World</p>
        </div>
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio(
              'https://link2.rbtrack.ru/http://213.141.131.10:8000/jazzmetal'
            )
          "
        >
          <img src="../assets/radio/caprice.png" class="logo_radio" />
          <p class="text_radio">Radio Caprice: Jazz / Fusion Metal</p>
        </div>
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio(
              'https://link2.rbtrack.ru/http://213.141.131.10:8000/hardcorepunk'
            )
          "
        >
          <img src="../assets/radio/caprice.png" class="logo_radio" />
          <p class="text_radio">Radio Caprice</p>
        </div>
        <div
          class="block_radio"
          v-on:click="
            ChangeRadio(
              'https://link2.rbtrack.ru/http://79.120.39.202:8002/electroclash'
            )
          "
        >
          <img src="../assets/radio/caprice.png" class="logo_radio" />
          <p class="text_radio">Radio Caprice - Electroclash</p>
        </div>
        <div
          class="block_radio"
          v-on:click="ChangeRadio('https://stream.vyshka24.ru/wowtop50')"
        >
          <img src="../assets/radio/images.png" class="logo_radio" />
          <p class="text_radio">Wow Music: Top 50</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPage",
  methods: {
    ChangeRadio(src) {
      let audio = document.getElementById("player");
      let text1 = document.getElementById("text1");
      let text2 = document.getElementById("text2");
      audio.src = src;
      audio.play();
      let input = document.getElementById("rangeAudio");
      input.style.display = "none";
      text1.style.display = "none";
      text2.style.display = "none";
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
.logo_radio {
  width: 100px;
}
.block_radio {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 50px 0 0 30px;
}
.text_radio {
  font-size: 30px;
  color: #ffffff;
  padding-left: 15px;
}
</style>
