// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'reset-css'
import Help from './helper.js';
import Vue from 'vue'
import VueBus from 'vue-bus'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueBus);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
