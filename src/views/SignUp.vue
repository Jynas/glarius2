<template>
  <div class="wrapper">
    <div class="block_login">
      <div>
        <img src="../assets/logo.svg" alt="logo" class="logo_img" />
        <p class="text_login">ВХОД</p>
        <p class="text_signup">
          У вас уже есть аккаунт на Glarius?<router-link
            to="/login"
            class="link_signup"
            >ВОЙТИ</router-link
          >
        </p>
      </div>
      <div>
        <div class="block_input">
          <p class="text_for_input">Электронный адрес</p>
          <input type="text" class="input" />
        </div>
        <div class="block_input">
          <p class="text_for_input">Имя пользователя</p>
          <input type="text" class="input" />
        </div>
        <div class="block_input">
          <p class="text_for_input">Пароль</p>
          <input type="password" class="input" />
        </div>
        <div class="block_input">
          <p class="text_for_input">Возраст</p>
          <input
            type="text"
            oninput="this.value = this.value.replace(/\D/g, '')"
            class="input"
          />
        </div>
        <a class="link_submit">Войти</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/logIn/backLogin.png");
  display: flex;
  align-items: center;
  justify-content: center;
}
.link_signup {
  color: #ff5b5b;
  padding-left: 5px;
  text-decoration: none;
}
.logo_img {
  width: 124px;
  height: 24px;
}
.text_login {
  font-weight: bold;
  font-size: 32px;
  color: #ffffff;
  margin: 40px 0 25px 0;
}
.text_signup {
  color: #ffffff;
}
.block_input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 461px;
}
.text_for_input {
  color: #ffffff;
  text-align: left;
  margin: 30px 0 5px 0;
  width: 100%;
  font-weight: bold;
}
.input {
  width: 100%;
  height: 55px;
  background: #ffffff;
  border-radius: 10px;
  font-size: 30px;
  outline: none;
}
.link_submit {
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff8989;
  border-radius: 30px;
  color: #ffffff;
  font-size: 23px;
  margin-top: 30px;
}
</style>
