import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      layout: 'Layout'
    }
  },
  //{
    //path: '*',
    //component: Error404
  //},
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  router,
  render: h => h(App),
  computed: {
    layout: function () {
      return this.$route.meta.layout || 'Layout';
    }
  },
}).$mount('#app')
