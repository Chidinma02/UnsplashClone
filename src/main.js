import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import IconsPlugin from "bootstrap-vue";
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import router from "./router";
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
