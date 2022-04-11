import Vue from "vue";
import App from "./VueDischi.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
