import http from './axios'

//封装banner图接口
export function getBannerList(){
    return http.get('/api/getbanner')
}
// 首页获取商品
export function getGoodsList() {
    return http.get('/api/getindexgoods')
}
// 首页获取分类树形结构
export function getCateTree() {
    return http.get('/api/getcatetree')
}

// 首页获取分类商品
export function getGoods(fid) {
    let params = {
        fid
    }
    return http.get('/api/getgoods',{params})
}
// 首页一个商品
export function getGoodsInfo(id) {
    let params = {
        id
    }
    return http.get('/api/getgoodsinfo',{params})
}
// 注册会员
export function register(data) {
    return http.post('/api/register',data)
}
// 登录会员
export function login(data) {
    return http.post('/api/login',data)
}

//  获取购物车列表
export function getCartList(params) {
    return http.get('/api/cartlist',{params})
}

// 购物车添加
export function cartAdd(data) {
    return http.post('/api/cartadd',data)
}
// 购物车删除
export function cartDelete(data) {
    return http.post('/api/cartdelete',data)
}
