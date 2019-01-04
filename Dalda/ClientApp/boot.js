import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { 
    path: '/', 
    component: App
  }
]
new Vue({
  el: '#app',
  router: new VueRouter({ mode: 'history', routes: routes }),
  template: "<div><router-view></router-view></div>",
});