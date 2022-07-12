import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IndexBaskets from "../views/IndexBaskets.vue";
import CreateBaskets from "../views/CreateBaskets.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import UserProfile from "../views/UserProfile.vue";
import ShowBaskets from "../views/ShowBaskets.vue";
import IndexAssets from "../views/IndexAssets.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/users", name: "my profile", component: UserProfile },

  {
    path: "/baskets",
    name: "baskets",
    component: IndexBaskets,
  },
  {
    path: "/baskets/:id",
    name: "baskets-show",
    component: ShowBaskets,
  },
  {
    path: "/baskets/create",
    name: "baskets-create",
    component: CreateBaskets,
  },
  {
    path: "/assets",
    name: "index-assets",
    component: IndexAssets,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
