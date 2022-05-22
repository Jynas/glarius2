import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/",
    name: "main",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainPage.vue"),
  },
  {
    path: "/login",
    name: "LogIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LogIn.vue"),
  },
  {
    path: "/signup",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
  {
    path: "/music",
    name: "music",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MusicPage.vue"),
  },
  {
    path: "/library",
    name: "library",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MusicLib.vue"),
  },
  {
    path: "/radio",
    name: "radio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MusicRadio"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfilePage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
