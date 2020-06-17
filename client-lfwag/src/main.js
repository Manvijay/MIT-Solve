import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import vuetify from './plugins/vuetify';

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
  render: h => h(App)
}).$mount('#app')
