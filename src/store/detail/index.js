import { reqDetaillist } from '../../api/index'
const actions = {
    getDetailInfo(context, value) {
        reqDetaillist(value).then(
            function (res) {
                if (res.code === 200) {
                    context.commit('GETDetailInfo', res.data)
                }
            }
        ).catch(function (err) { console.log(err) })
    }
};
const mutations = {
    GETDetailInfo(state,value) {
             state.Detaillist=value
    }
};
const state = {
    Detaillist:{}
};
const getters = {
    categoryView(state) {
        return state.Detaillist.categoryView || {}//防止页面取undefined报错
    },
    skuInfo(state) {
       return state.Detaillist.skuInfo || {}
    },
    //产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.Detaillist.spuSaleAttrList || [];
    }

};

export default {
    actions, mutations, state, getters
}