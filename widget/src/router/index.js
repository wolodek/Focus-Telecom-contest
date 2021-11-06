import { createRouter, createWebHistory } from "vue-router";
import Start from "../views/Start.vue";
import Ringing from "../views/Ringing.vue";
import Connected from "../views/Connected.vue";
import Answered from "../views/Answered.vue";
import Failed from "../views/Failed.vue";
import History from "../views/History.vue";

const routes = [
  {
    path: "/ringing",
    name: "ringing",
    component: Ringing,
    props: true
  },
  {
    path: "/connected",
    name: "connected",
    component: Connected,
    props: true
  },
  {
    path: "/answered",
    name: "answered",
    component: Answered,
    props: true
  },
  {
    path: "/failed",
    name: "failed",
    component: Failed,
    props: true
  },
  {
    path: "/history",
    name: "history",
    component: History,
    props: true
  },
  {
    path: "/:pathMatch(.*)*",
    name: "start",
    component: Start
  },
];
const router = createRouter({
  routes,
  history: createWebHistory()
});
export default router;
