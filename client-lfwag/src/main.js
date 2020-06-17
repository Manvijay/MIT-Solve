import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuex from 'vuex'
import vuetify from './plugins/vuetify'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes=[
  {path:'/home', component:Home},
  {path:'/', component:Home},
  {path:'/about', component:AboutUs}
]

const router= new VueRouter({
  routes:routes,
  mode:'history'
})

new Vue({
  router,
  vuetify,
  vuex,
  render: h => h(App)
}).$mount('#app')
