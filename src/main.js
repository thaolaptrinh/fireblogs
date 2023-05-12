import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/global.css";
import store from "./store";
import router from "./router";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

const app = createApp(App);
app.component("QuillEditor", QuillEditor);
app.use(store);
app.use(router);
app.mount("#app");
