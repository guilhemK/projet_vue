import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  // methods: {
  //   getPathToImg() {
  //     var path = './assets/';
  //     return path;
  //   }
  // }
  render: h => h(App)
}).$mount('#app')
