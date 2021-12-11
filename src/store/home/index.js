
import {reqCategroylist} from '../../api/index'
const actions = {
    //通过api里面的接口函数调用，像服务器发请求，获取服务器数据
    categoryList(context) {
        reqCategroylist().then(
            function(res) {
               if (res.code === 200) {
                    context.commit('CATEGORYLIST',res.data)
               }
            }
        ).catch((error)=>{console.log(error)})
        
    }
};
const mutations = {
    CATEGORYLIST(state,data) {
        state.categoryList = data;
    }
};
const state = {
    //state中的数据，默认初始值别瞎写，根据接口返回值进行初始化
    categoryList:[]
};
const getters = {};

export default {
    actions,mutations,state,getters
}