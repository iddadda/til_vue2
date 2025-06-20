import { createRouter, createWebHistory } from "vue-router";
import Component from "@/views/Component.vue";
import Mustache from "@/views/Mustache.vue";
import Chapter3 from "@/views/Chapter3.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/component",
      component: Component,
    },
    {
      path: "/mustache",
      component: Mustache,
    },
    {
      path: "/chapter3",
      component: Chapter3,
    },
  ],
});

export default router;
