import { reqShopList,reqDeleteShopcartById ,reqUpdateShopCarbyId} from '../../api/index'
const actions = {
    getShopCart(context) {
        reqShopList().then((res) => {
            if (res.code === 200) {
                context.commit('GETShopCart', res.data)
            }
        })
    },
    deleteShopcartById(context,skuId) {
        return reqDeleteShopcartById(skuId)
    },
    reqUpdateShopCarbyId(context,{skuId,isChecked}) {
        return   reqUpdateShopCarbyId(skuId,isChecked)
    }
};
const mutations = {
    GETShopCart(state, value) {
        state.ShopList = value
    }
};
const state = {
    ShopList: []
};
const getters = {
    cartInfoObj(state) {
        return state.ShopList[0] || [];
    }
};
export default {
    actions, mutations, state, getters
}