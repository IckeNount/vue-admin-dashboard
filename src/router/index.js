import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TeamView from "../views/TeamView";
import SignIn from "../views/SignInFlow/SignIn";
import RequestCode from "../views/SignInFlow/Request";
import RecoverAcc from "../views/SignInFlow/Recover";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/team",
    name: "team",
    component: TeamView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/request",
    name: "request",
    component: RequestCode,
  },
  {
    path: "/recover",
    name: "recover",
    component: RecoverAcc,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
