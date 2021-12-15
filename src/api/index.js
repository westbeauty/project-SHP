//当前这个模块：API进行统一管理
import requests from './ajax';
import Mockrequests from './mockAjax'

//三级联动接口
//  /api/product/getBaseCategoryList  参数无

export const reqCategroylist = function() {
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}

// mockjs虚拟数据接口
export const reqBannerList = function() {
    return Mockrequests({url:'/banner'})
}

export const reqFloorList = function() {
    return Mockrequests({url:'/floor'})
}

export const reqSearchList = function(params) {
    return requests({url:'/list',data:params,method:'post'})
}

export const reqDetaillist = function(skuId) {
    return requests({url:`/item/${ skuId }`,method:'get'})
}
