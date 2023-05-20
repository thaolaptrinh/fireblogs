import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        meta: {
          title: "Home",
        },
        component: () => import("../views/home.vue"),
      },

      {
        path: "blogs",
        name: "blogs",
        meta: {
          title: "Blogs",
        },
        component: () => import("../views/blogs.vue"),
      },
    ],
  },

  {
    path: "/auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        alias: "login",
        name: "login",
        meta: {
          title: "Login",
        },
        component: () => import("../views/login.vue"),
      },
      {
        path: "register",
        name: "register",
        meta: {
          title: "Register",
        },
        component: () => import("../views/register.vue"),
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        meta: {
          title: "Forgot password",
        },
        component: () => import("../views/forgot-password.vue"),
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

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = `${to.meta.title} | Fireblogs`;
  next();
});

export default router;
