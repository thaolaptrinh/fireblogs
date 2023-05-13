import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/home.vue"),
      },

      {
        path: "",
        name: "blogs",
        component: () => import("../views/blogs.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        alias: "login",
        name: "login",
        component: () => import("../views/login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/register.vue"),
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
