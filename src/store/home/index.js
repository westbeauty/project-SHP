
import { reqCategroylist } from '../../api/index'
import { reqBannerList, reqFloorList } from '../../api/index'
const actions = {
    //通过api里面的接口函数调用，像服务器发请求，获取服务器数据
    categoryList(context) {
        reqCategroylist().then(
            function (res) {
                if (res.code === 200) {
                    context.commit('CATEGORYLIST', res.data)
                }
            }
        ).catch((error) => { console.log(error) })

    },
    getListContainer(context) {
        reqBannerList().then(function (res) {
            if (res.code === 200) {
                context.commit('GETListContainer', res.data);
            }
        })
    },
    getFloorList(context) {
        reqFloorList().then(
            function (res) {
                if (res.code === 200) {
                    context.commit('GETFloorList', res.data)
                }
            }
        )
    }
};
const mutations = {
    CATEGORYLIST(state, data) {
        data.pop();
        state.categoryList = data;
    },
    GETListContainer(state, data) {
        state.bannerList = data;
    },
    GETFloorList(state, data) {
        state.floorList = data
    }
};
const state = {
    //state中的数据，默认初始值别瞎写，根据接口返回值进行初始化
    categoryList: [],
    bannerList: [],
    floorList: []
};
const getters = {};

export default {
    actions, mutations, state, getters
}