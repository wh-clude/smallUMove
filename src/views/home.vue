<template>
  <div class="db-home">
    <v-header></v-header>
    <div class="nav-content">
      <div class="nav-top">
        <div class="nav-left">
          <span class="address iconfont icon-location"></span>
          <img class="logo" src="../assets/imgs/logo/white.png" alt="" />
        </div>
        <div class="nav-center">
          <span class="iconfont icon-sousuo"></span>
          <input class="search" type="text" placeholder="按内容搜索" />
        </div>
        <div class="nav-right">
          <span class="store iconfont icon-shangdian"></span>
        </div>
      </div>
      <div class="nav">
        <ul>
          <li :key="item.id" v-for="item in navList">{{ item.title }}</li>
        </ul>
        <div class="classify">
          <i class="iconfont icon-toggle"></i>
          <span>分类</span>
        </div>
      </div>
    </div>
    <v-banner></v-banner>
    <div class="seckill">
      <div class="limit">
        <div class="limit-left">
          <h3>
            限时秒杀
            <span>查看更多</span>
          </h3>
          <p>每天0点场，好货秒不停</p>
          <div class="timer">
            <span>05</span>: <span>20</span>:
            <span>48</span>
          </div>
        </div>
        <div class="limit-right">
          <div class="lim-top">
            <h2>{{ limTop.title }}</h2>
            <p>{{ limTop.grab }}</p>
            <div>
              <span>{{ limTop.packet }}</span>
              <img :src="limTop.img" alt="" />
            </div>
          </div>
          <div class="lim-bottom">
            <h2>{{ limBottom.title }}</h2>
            <p>{{ limBottom.grab }}</p>
            <div>
              <span>{{ limBottom.packet }}</span>
              <img :src="limBottom.img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <van-tabs type="card">
      <van-tab
        :title="item.title"
        v-for="(item, index) in shopList"
        :key="index"
      >
        <van-card
          v-for="(list, idx) in item.shopList"
          :key="idx"
          centered
          :price="list.price"
          :title="list.goodsname"
          :origin-price="list.market_price"
          :thumb="$imgUrl + list.img"
          @click="toList(list.id)"
        >
        </van-card>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getGoodsList } from "../util/axios/index";
export default {
  data() {
    return {
      navList: [
        {
          id: 1,
          title: "推荐",
        },
        {
          id: 2,
          title: "女装",
        },
        {
          id: 3,
          title: "鞋包",
        },
        {
          id: 4,
          title: "居家",
        },
        {
          id: 5,
          title: "母婴",
        },
        {
          id: 6,
          title: "美妆",
        },
      ],
      limTop: {
        title: "品牌上新",
        grab: "9点整，抢大牌",
        packet: "疯抢红包",
        img: require("../assets/imgs/white.png"),
      },
      limBottom: {
        title: "日用好物",
        grab: "愿君多采撷",
        packet: "塞满奖券",
        img: require("../assets/imgs/white.png"),
      },
      shopList: [],
    };
  },
  mounted() {
    getGoodsList().then((res) => {
      // console.log(res);
      if (res.data.code == 200) {
        this.shopList.push({
          title: "最新商品",
          shopList: res.data.list[0].content,
        });
        this.shopList.push({
          title: "最热商品",
          shopList: res.data.list[1].content,
        });
        this.shopList.push({
          title: "所有商品",
          shopList: res.data.list[2].content,
        });
      }
    });
  },
  methods: {
    toList(id) {
      this.$router.push("/list?id=" + id);
    },
  },
};
</script>
<style lang="" scoped>
.db-home {
  margin-bottom: 0.6rem;
}
.nav-content {
  height: 0.8rem;
  background-image: linear-gradient(#ff6040, #ff8a80);
  box-shadow: -0.05rem 0.05rem 0.1rem -0.05rem #ff9580;
}
.nav-content .nav-top {
  display: flex;
  height: 0.48rem;
  line-height: 0.48rem;
}
.nav-content .nav-top .nav-left {
  width: 1.55rem;
}
.nav-content .nav-top .nav-left .logo {
  width: 0.91rem;
  height: 0.24rem;
  margin-left: 0.1rem;
}
.nav-content .nav-top .nav-left .icon-location {
  color: #fff;
  width: 0.1833rem;
  height: 0.22rem;
  margin-left: 0.13rem;
}
.nav-content .nav-top .nav-center {
  flex: 1;
  width: 1.7rem;
  height: 0.32rem;
  background: #fff;
  margin-top: 10px;
  line-height: 0.32rem;
  display: flex;
}
.nav-content .nav-top .nav-center .icon-sousuo {
  font-size: 0.16rem;
  margin-left: 0.12rem;
}
.nav-content .nav-top .nav-center .search {
  flex: 1;
  margin-left: 0.06rem;
  border: none;
  overflow: hidden;
}
.nav-content .nav-top .nav-right {
  width: 0.5rem;
  text-align: center;
}
.nav-content .nav-top .nav-right .store {
  width: 0.2rem;
  height: 0.2rem;
  font-size: 0.2rem;
  color: #fff;
}
.nav-content .nav {
  display: flex;
  line-height: 0.32rem;
  color: #fff;
  font-size: 0.16rem;
  background-image: linear-gradient(#ff7a68, #ff8a80);
  box-shadow: 0rem 0.02rem 0.06rem #e63d2e;
}
.nav-content .nav ul {
  flex: 1;
  display: flex;
  font-size: 0.16rem;
}
.nav-content .nav ul li {
  flex: 1;
  text-align: center;
  font-size: 0.14rem;
}
.nav-content .nav ul li:first-child {
  font-size: 0.16rem;
  border-bottom: 3px solid #fff;
}
.nav-content .nav .classify {
  width: 0.65rem;
}
.nav-content .nav .classify .icon-toggle {
  font-size: 0.16rem;
}
.seckill {
  width: 100%;
  height: 1.95rem;
  background-color: #f2f2f2;
  overflow: hidden;
}
.seckill .limit {
  margin: 0.1rem;
  display: flex;
  justify-content: space-between;
}
.seckill .limit .limit-left {
  width: 1.75rem;
  background: url("../assets/imgs/seckill/big.png") no-repeat;
  background-size: 1.75rem 1.75rem;
}
.seckill .limit .limit-left h3 {
  font-size: 0.16rem;
  color: #85a642;
  height: 0.16rem;
  margin: 0.1rem;
}
.seckill .limit .limit-left h3 span {
  float: right;
  margin-top: -0.16rem;
  font-size: 0.2rem;
  width: 1rem;
  -webkit-transform-origin-x: right;
  -webkit-transform-origin-y: center;
  transform: scale(0.5);
  color: #333;
}
.seckill .limit .limit-left h3 span i {
  color: #333;
  font-size: 0.2rem;
  transform: scale(0.5);
}
.seckill .limit .limit-left p {
  color: #b1cc7a;
  margin-left: 0.1rem;
  font-size: 0.2rem;
  width: 2.4rem;
  -webkit-transform-origin-x: 0;
  transform: scale(0.5);
}
.seckill .limit .limit-left .timer {
  width: 0.58rem;
  height: 0.18rem;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
  color: #85a642;
  display: flex;
  justify-content: space-between;
}
.seckill .limit .limit-left .timer span {
  width: 0.16rem;
  height: 0.18rem;
  background-color: #b1cc7a;
  color: #fff;
  text-align: center;
  line-height: 0.18rem;
}
.seckill .limit .limit-right {
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.seckill .limit .limit-right .lim-top {
  height: 0.85rem;
  background: url("../assets/imgs/seckill/small.png") no-repeat;
  background-size: 1.75rem 0.85rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.seckill .limit .limit-right .lim-top h2 {
  font-size: 0.16rem;
  color: #ff6040;
}
.seckill .limit .limit-right .lim-top p {
  font-size: 0.2rem;
  width: 2.4rem;
  -webkit-transform-origin-x: 0;
  transform: scale(0.5);
  color: #ff9580;
  line-height: 0.2rem;
  margin-top: 0.1rem;
}
.seckill .limit .limit-right .lim-top div {
  width: 0.6rem;
  height: 0.2rem;
  background: linear-gradient(#ff6040, #ff9f80);
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  font-size: 0;
}
.seckill .limit .limit-right .lim-top div span {
  color: #fff;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  line-height: 0.2rem;
}
.seckill .limit .limit-right .lim-top div img {
  font-size: 0.1rem;
  width: 0.06rem;
  height: 0.1rem;
  vertical-align: -0.01rem;
}
.seckill .limit .limit-right .lim-bottom {
  height: 0.85rem;
  background: url("../assets/imgs/seckill/02.png");
  background-size: 1.75rem 0.85rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.seckill .limit .limit-right .lim-bottom h2 {
  font-size: 0.16rem;
  color: #af40ff;
}
.seckill .limit .limit-right .lim-bottom p {
  font-size: 0.2rem;
  width: 2.4rem;
  -webkit-transform-origin-x: 0;
  transform: scale(0.5);
  color: #ca80ff;
  line-height: 0.2rem;
  margin-top: 0.1rem;
}
.seckill .limit .limit-right .lim-bottom div {
  width: 0.6rem;
  height: 0.2rem;
  background: linear-gradient(#af40ff, #f58cff);
  border-radius: 0rem 0.2rem 0.2rem 0rem;
  font-size: 0;
}
.seckill .limit .limit-right .lim-bottom div span {
  color: #fff;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  line-height: 0.2rem;
}
.seckill .limit .limit-right .lim-bottom div img {
  font-size: 0.1rem;
  width: 0.06rem;
  height: 0.1rem;
  vertical-align: -0.01rem;
}
</style>
