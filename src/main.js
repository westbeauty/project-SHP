import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import TypeNav from './pages/Home/TypeNav'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

import {reqCategroylist} from './api/index'
reqCategroylist();
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
