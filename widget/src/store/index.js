import calls from "./modules/calls";
import { createStore } from "vuex";
import api from "./modules/api";

const store = createStore({
  modules: {
    calls,
    api
  }
});
export default store;
