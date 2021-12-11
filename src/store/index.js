import Vuex from 'vuex';
import Vue from 'vue';

import home from './home'
import search from './search'

Vue.use(Vuex);
// //仓库存储数据的地方
// const state = {};
// //修改state的唯一手段
// const mutations = {};
// //处理actions，可以书写自己的业务逻辑，也可以处理异步
// const actions = {};
// //理解为计算属性，简化组件获取仓库数据
// const getters = {};



export default new Vuex.Store({
    modules:{
        home,search
    }
})