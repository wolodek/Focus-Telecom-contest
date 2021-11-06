import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";
import Ringing from "../views/Ringing.vue";
import Connected from "../views/Connected.vue";
import Answered from "../views/Answered.vue";
import Failed from "../views/Failed.vue";
import History from "../views/History.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "*",
    name: "start",
    component: Start
  },
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
  }
];
const router = new VueRouter({
  routes
});
export default router;
