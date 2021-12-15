import {reqSearchList} from '../../api/index'
const actions = { 
    getSearch(context, value={}) {
        reqSearchList(value).then(
            function (res) {
                if (res.code === 200) {
                    context.commit('GETSearch', res.data)
                }
            }
        ).catch(function (error) { console.log(error) })
    }
};
const mutations = {
    GETSearch(state,value) {
        state.Searchobj = value
    }
};
const state = {
    Searchobj:{}
};
const getters = {
    goodsList(state) {
        return state.Searchobj.goodsList || [];
    },
    attrsList(state) {
        return state.Searchobj.attrsList || [];
    },
    trademarkList(state) {
        return state.Searchobj.trademarkList || [];
    }
};

export default {
    actions, mutations, state, getters
}