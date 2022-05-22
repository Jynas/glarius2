<template>
  <div class="wrapper">
    <div class="up_block">
      <div class="up_block_left">
        <img src="../assets/logo.svg" alt="" class="img_logo" />
        <div class="block_link">
          <router-link to="/profile" class="link_music selected"
            ><img
              src="../assets/music/red/userred.svg"
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
        <p class="text_profile">Имя:</p>
        <p class="text_profile">Электронный адрес:</p>
        <p class="text_profile">Возраст: лет</p>
        <div class="block_profile">
          <h1 class="text_profile">Загрузка треков</h1>
          <div>
            <p class="text_profile">Название</p>
            <input type="text" class="input_text" />
          </div>
          <div>
            <p class="text_profile">
              Обложка трека. <br />Разрешенные форматы: png и jpeg
            </p>
            <input type="file" class="file_input" accept=".png, .jpeg" />
            <p class="text_profile"></p>
          </div>
          <div>
            <p class="text_profile">Трек</p>
            <input type="file" class="file_input" accept=".mp3, .ogg" />
          </div>
          <div class="block_submit">
            <p class="text_profile">
              Внимание после нажатия кнопки вы не сможете удалить свой трек с
              нашей площадки!
            </p>
            <p class="text_profile">
              Трек может быть не допущен к выгрузке на площадку если нарушены
              условия выкладки музыки на Glarius
            </p>
            <a class="button_submit">Загрузить сейчас</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicPage",
  data() {
    return {
      health: "health.svg",
    };
  },
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
    changeHealth(id) {
      id.src = require("../assets/music/red/healthred.svg");
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
.text_profile {
  color: #ffffff;
}
.block_profile {
  display: flex;
  flex-direction: column;
}
.block_input_text {
  display: flex;
}
.button_submit {
  width: 200px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff8989;
  border-radius: 30px;
}
.block_submit {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
}
.input_text {
  width: 200px;
  height: 30px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 30px;
  outline: none;
}
.file_input {
  color: #ffffff;
}
</style>
