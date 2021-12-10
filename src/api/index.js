//当前这个模块：API进行统一管理
import requests from './requests';

//三级联动接口
//  /api/product/getBaseCategoryList  参数无

export const reqCategroylist = function() {
    return requests({url:'/product/getBaseCategoryList',method:'get'})
}