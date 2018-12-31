// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint space-before-function-paren: "error" */
/* eslint-disable-next-l
// eslint-disable-next-line to ignore the next line */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
