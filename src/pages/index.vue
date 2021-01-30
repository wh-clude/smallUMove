<template>
  <div>
    <!-- 二级路由入口 -->
    <van-tabbar route v-model="active" active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item to='/home' icon="wap-home-o">商城</van-tabbar-item>
      <van-tabbar-item to="/classify" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shop-o">购物车</van-tabbar-item>
      <van-tabbar-item to='/mine' icon="user-o">个人中心</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="" scoped>
</style>
