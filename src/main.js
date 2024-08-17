import { createApp } from "vue";
import App from "./App.vue";
import Toast from "vue-toastification";
import router from "./router";
import "@/assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(Toast);
app.mount("#app");
