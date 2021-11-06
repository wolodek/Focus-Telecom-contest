import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VTooltip from "v-tooltip";

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VTooltip);
app.config.productionTip = false;
app.mount('#app')