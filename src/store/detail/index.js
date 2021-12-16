import { reqDetaillist } from '../../api/index'
import {reqAddShopCart} from '../../api/index'
import {getUuid} from '../../uuid/uuid'
const actions = {
    getDetailInfo(context, value) {
        reqDetaillist(value).then(
            function (res) {
                if (res.code === 200) {
                    context.commit('GETDetailInfo', res.data)
                }
            }
        ).catch(function (err) { console.log(err) })
    },
    addShopCart(context,{skuId,skuNum}) {
        
        //服务器写入数据成功，并没有返回其他的数据，只是返回code，代表这次操作成功
       return reqAddShopCart(skuId,skuNum);
    }
};
const mutations = {
    GETDetailInfo(state,value) {
             state.Detaillist=value
    }
};
const state = {
    Detaillist:{},
    uuid_token:getUuid()
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