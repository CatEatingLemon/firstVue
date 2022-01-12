import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import md5 from 'js-md5'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://192.168.0.199:8009/Thirdparty'
Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5

// 解决 发送请求时会先预请求的问题(options)
import qs from 'qs'
Vue.prototype.$qs = qs

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')