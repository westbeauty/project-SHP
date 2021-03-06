import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import  './mock/mockServe'
import '../node_modules/swiper/css/swiper.css'

import TypeNav from './components/TypeNav'
import Lunbotu from './components/LunBoTu'
import Pagination from './components/Pagination'
//第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Lunbotu.name,Lunbotu);
Vue.component(Pagination.name,Pagination)


Vue.config.productionTip = false

import {reqCategroylist} from './api/index'
reqCategroylist();
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
