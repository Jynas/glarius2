<template>
  <router-view />
  <div class="wrapper">
    <div class="header">
      <router-link to="/login" class="link">Войти</router-link>
    </div>
    <div class="main">
      <h1 class="h1-text">В музыке есть прекрасная вещь —</h1>
      <p class="p-text">когда она попадает в тебя, ты не чувствуешь боли.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "MainPage",
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: flex;
  background-image: url("../assets/main/backMain.png");
  flex-direction: column;
}
.header {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.link {
  margin-right: 65px;
  margin-top: 45px;
  width: 110px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
}
.main {
  justify-content: center;
  height: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.h1-text {
  margin: 0;
  font-weight: 700;
  font-size: 60px;
  color: #ffffff;
}
.p-text {
  margin: 0;
  color: #ffffff;
  font-size: 42px;
}
</style>
