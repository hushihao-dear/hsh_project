
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Resource from 'vue-resource'
import store from './store'
Vue.use(Resource)
Vue.use(ElementUI)
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
