import { createApp } from "vue";
import { createDynamicForms } from "@asigloo/vue-dynamic-forms";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const VueDynamicForms = createDynamicForms({});

createApp(App)
  .use(store)
  .use(router)
  .use(VueDynamicForms)
  .mount("#app");
