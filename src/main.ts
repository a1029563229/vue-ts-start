import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mixin } from "./mixins/common.mixin";

import "reset.css";

Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');