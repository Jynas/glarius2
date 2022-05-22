<template>
  <div class="wrapper_player">
    <div style="background-color: black"></div>
    <div class="down_block">
      <div class="block_volume_timeline">
        <div class="timeline">
          <a @click="playToggle()"
            ><img
              :src="require(`../assets/music/${imgWay}`)"
              alt=""
              class="play_button"
          /></a>
          <div class="timeline_line">
            <p id="text1" class="text_time">{{ modelInput }}</p>
            <input
              type="range"
              id="rangeAudio"
              v-model="modelInput"
              :max="maxAudio"
              v-on:change="timeInput()"
              class="input_time"
            />
            <p id="text2" class="text_time" v-if="maxAudio">{{ maxAudio }}</p>
          </div>
        </div>
        <div class="block_volume">
          <img
            :src="require(`../assets/music/${volumeSvg}`)"
            alt=""
            class="play_button"
            v-on:click="mutedVolume()"
          />
          <input
            type="range"
            min="0"
            step="0.1"
            max="1"
            v-on:change="rangeVolume"
            v-on:click="changeVolume"
            v-model="modelVolume"
            class="input_volume"
          />
        </div>
      </div>
      <audio
        id="player"
        controls
        :src="fileMusic"
        v-on:play="musicPlay"
      ></audio>
    </div>
  </div>
</template>

<script>
export default {
  name: "AudioPlayer",
  data() {
    return {
      fileMusic:
        "https://upload.wikimedia.org/wikipedia/commons/d/d6/Louis-Emmanuel_Jadin_-_Nocturne_No._3_in_G_minor_-_2._Allegro_molto.ogg",
      imgWay: "play-button-arrowhead-svgrepo-com.svg",
      modelInput: 0,
      maxAudio: 0,
      modelVolume: 0,
      fullTimeAudio: 0,
      volumeSvg: "volume.svg",
    };
  },
  methods: {
    playToggle() {
      let audio = document.getElementById("player");
      if (audio.paused) {
        console.log(this.fileMusic);
        audio.play();
        this.imgWay = "music-pause-button-pair-of-lines-svgrepo-com.svg";
      } else {
        audio.pause();
        this.imgWay = "play-button-arrowhead-svgrepo-com.svg";
      }
      if (window.location.href != "http://localhost:8080/radio") {
        let interval = setInterval(() => {
          let audioTime = Math.round(audio.currentTime);
          let audioLength = Math.round(audio.duration);
          this.maxAudio = audioLength;
          this.modelInput = audioTime;
          if (audio.ended) {
            this.imgWay = "play-button-arrowhead-svgrepo-com.svg";
          }
          if (audio.paused) {
            clearInterval(interval);
          }
        }, 1000);
      }
    },
    timeInput() {
      let audio = document.getElementById("player");
      let audioTime = Math.round(audio.currentTime);
      let audioLength = Math.round(audio.duration);
      this.maxAudio = audioLength;
      audio.currentTime = audioTime - audioTime + this.modelInput;
    },
    rangeVolume() {
      let audio = document.getElementById("player");
      let audioVolume = audio.volume;
      audio.volume = audioVolume - audioVolume + this.modelVolume;
    },
    changeVolume() {
      let audio = document.getElementById("player");
      let audioVolume = audio.volume;
      this.modelVolume = audioVolume;
      if (audio.volume === 0) {
        this.volumeSvg = "volume0.svg";
      } else {
        this.volumeSvg = "volume.svg";
      }
    },
    musicPlay() {
      let audio = document.getElementById("player");
      if (!audio.paused) {
        this.imgWay = "music-pause-button-pair-of-lines-svgrepo-com.svg";
      }
      if (window.location.href != "http://localhost:8080/radio") {
        let interval = setInterval(() => {
          let audioTime = Math.round(audio.currentTime);
          let audioLength = Math.round(audio.duration);
          this.maxAudio = audioLength;
          this.modelInput = audioTime;
          if (audio.ended) {
            this.imgWay = "play-button-arrowhead-svgrepo-com.svg";
          }
          if (audio.paused) {
            clearInterval(interval);
          }
        }, 1000);
      }
    },
    mutedVolume() {
      let audio = document.getElementById("player");
      if (audio.volume <= 0) {
        audio.volume = 1;
        this.volumeSvg = "volume.svg";
      } else {
        audio.volume = 0;
        this.volumeSvg = "volume0.svg";
      }
      this.changeVolume();
    },
  },
  mounted() {
    this.changeVolume();
    this.timeInput();
  },
  beforeUpdate() {
    this.musicPlay();
  },
  // let rad_stations = [
  //   [
  //     "https://cast2.my-control-panel.com/proxy/vladas/stream",
  //     "Rock Radio",
  //     "rockradio",
  //   ],
  //   ["https://retro.amgradio.ru/Retro", "Ретро Хит", "retrohit"],
  //   [
  //     "https://chanson.hostingradio.ru:8041/chanson256.mp3",
  //     "Радио Шансон",
  //     "chanson",
  //   ],
  //   [
  //     "https://pub0302.101.ru:8443/stream/air/aac/64/202",
  //     "Comedy Radio",
  //     "comediradio",
  //   ],
  //   ["https://pub0101.101.ru/stream/air/aac/64/100", "Авторадио", "avtoradio"],
  //   ["https://pub0202.101.ru:8443/stream/air/aac/64/99", "Радио Energy", "nrj"],
  // ];
};
</script>

<style scoped>
.play_button {
  width: 25px;
  height: 25px;
  cursor: pointer;
}
.audio_track {
  width: 150px;
  height: 3px;
  background-color: #dddddd;
  margin: 20px 0;
}

.time {
  width: 0;
  height: 3px;
  background-color: #474747;
}
.input_time {
  -webkit-appearance: none;
  height: 10px; /* установите свою высоту*/
  padding: 0;
  border-radius: 5px;
  background-color: #454545;
  width: 700px;
  cursor: pointer;
  /* стили вашего ползунка */
}
.input_time::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  height: 0;
  width: 0;
  /* стили вашего бегунка */
}
.input_time::-moz-range-thumb {
  -moz-appearance: none !important;
  height: 0;
  width: 0;
  border: none;
  /* снова стили вашего бегунка */
}
.input_time::-ms-thumb {
  height: 0;
  width: 0;
  /* должен следовать после -webkit- */
  /* снова стили вашего бегунка */
  /* могут потребоваться разные отступы */
}
.input_time::-moz-range-progress {
  background-color: #ffffff;
  border-radius: 50px;
  height: 10px;
}
.input_volume {
  -webkit-appearance: none;
  height: 10px; /* установите свою высоту*/
  padding: 0;
  border-radius: 5px;
  background-color: #454545;
  margin-left: 5px;
  cursor: pointer;
  /* стили вашего ползунка */
}
.input_volume::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  height: 0;
  width: 0;
  /* стили вашего бегунка */
}
.input_volume::-moz-range-thumb {
  -moz-appearance: none !important;
  height: 0;
  width: 0;
  border: none;
  /* снова стили вашего бегунка */
}
.input_volume::-ms-thumb {
  height: 0;
  width: 0;
  /* должен следовать после -webkit- */
  /* снова стили вашего бегунка */
  /* могут потребоваться разные отступы */
}
.input_volume::-moz-range-progress {
  background-color: #ffffff;
  border-radius: 50px;
  height: 10px;
}
.down_block {
  width: 100%;
  height: 10vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#player {
  display: none;
}
.timeline {
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
}
.input_time {
  margin: 0 15px 0 15px;
}
.block_volume_timeline {
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper_player {
  display: grid;
  grid-template-columns: 1fr 5fr;
}
.timeline_line {
  display: flex;
  justify-content: center;
  align-items: center;
}
.block_volume {
  display: flex;
  justify-content: center;
  margin-left: 50px;
  align-items: center;
}
.text_time {
  color: #ffffff;
}
</style>
