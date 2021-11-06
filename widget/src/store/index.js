import calls from "./modules/calls";
import Vue from "vue";
import Vuex from "vuex";
import api from "./modules/api";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    calls,
    api
  }
});
export default store;
