import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faCheese, faBone } from "@fortawesome/free-solid-svg-icons";

import "@/index.css";
import router from "@/router";
import App from "@/App.vue";

library.add(faBone, faCheese, faSearch);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
