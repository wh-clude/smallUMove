<template>
  <div>
    <v-header></v-header>
    <div class="image">
      <a href="javascript:;">
        <img
          :src="
            goods.img
              ? $imgUrl + goods.img
              : 'http://p4.music.126.net/LB6hcyND-KTqBlfYMkbEnw==/109951165480872644.jpg?param=140y140'
          "
          alt=""
        />
      </a>
    </div>
    <div class="content">
      <div class="text">
        <p>{{ goods.goodsname }}</p>
        <p>￥{{ goodsPrice }}<span>(此价格不与套装优惠同时享受)</span></p>
      </div>
    </div>
    <div class="listDetail">
      <div>
        <p>购买数量</p>
        <van-stepper v-model="num" input-width="40px" button-size="32px" />
      </div>
      <div>
        <p>商品属性</p>
      </div>
      <div>
        <p>
          {{ goods.specsname }}
          <span v-for="item in goods.specsattr" :key="item"> {{ item }}</span>
        </p>
      </div>
    </div>
    <div class="ShopDetail">
      <div>
        <h3>商品详情</h3>
      </div>
      <div v-html="goods.description"></div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button
        @click="toCart"
        type="warning"
        text="加入购物车"
      />
      <van-goods-action-button type="danger" @click="toBuy" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
import { getGoodsInfo, cartAdd } from "../util/axios/index";
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      goods: [],
      num: 1,
    };
  },
  computed: {
    goodsPrice() {
      if (this.goods.price) return this.goods.price.toFixed(2);
      return "";
    },
  },
  mounted() {
    getGoodsInfo(this.$route.query.id).then((res) => {
      if (res.data.code === 200) {
        console.log(res.data.list);
        this.goods = res.data.list[0];
        this.goods.specsattr = this.goods.specsattr.split(",");
        console.log(this.goods,'aaaaaaaaaa');
      }
    });

  },
  methods: {
    toCart() {
      if (sessionStorage.getItem("userInfo")) {
        cartAdd({
          uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
          goodsid: this.goods.id,
          num: this.num,
        }).then((res) => {
          console.log(res);
          Toast.success(res.data.msg);
          this.$router.push({
            path: "/cart",
            query: {
              uid: JSON.parse(sessionStorage.getItem("userInfo")).uid,
            },
          });
        });
      } else {
        this.$router.push("/login");
      }
    },
    toBuy() {
      Dialog.alert({
        message: "暂无订单页！！！",
      }).then(() => {});
    },
  },
};
</script>

<style lang="" scoped>
.image {
  width: 100%;
}
image a img {
  width: 100%;
}
.content {
  color: black;
  height: 1.3rem;
  background-color: white;
}
.content .text {
  padding: 0.1rem;
}
.content .text p:nth-child(1) {
  /* height: 0.4rem; */
  overflow: hidden;
  font-size: 0.28rem;
  line-height: 0.5rem;
}
.content .text p:nth-child(2) {
  margin-top: 10px;
  font-size: 0.24rem;
  color: #e33c3e;
}
.content .text p:nth-child(2) span {
  color: #868686;
  font-size: 0.12rem;
  margin-left: 0.15rem;
}
.listDetail div {
  height: 0.4rem;
  line-height: 0.4rem;
}
.listDetail div p {
  font-size: 0.18rem;
  color: #666;
}
.listDetail div:nth-child(2) {
  border-bottom: 1px solid #868686;
  display: flex;
  justify-content: space-between;
}
.listDetail div:nth-child(2) p span {
  color: #b2291d;
  border: 1px solid #b2291d;
  padding: 0 0.1rem;
  margin: 0 0.05rem;
  border-radius: 0.06rem;
}
.listDetail div:nth-child(1) {
  border-bottom: 1px solid #868686;
  display: flex;
  justify-content: space-between;
}

.listDetail div:nth-child(3) p {
  color: #b6b6b6;
  font-size: 0.18rem;
}
.listDetail div:nth-child(3) p span {
  display: inline-block;
  padding: 0 0.13rem;
  line-height: 0.4rem;
  margin: 0 0.05rem;
  background-color: #e1e1e3;
  color: white;
  border-radius: 0.08rem;
}
.listDetail div:nth-child(3) p span:nth-child(1) {
  margin-left: 0.6rem;
}
.listDetail div:nth-child(3) p span:hover {
  background-color: #e33c3e;
}
.ShopDetail {
  color: black;
  margin-bottom: 1rem;
  background-color: white;
}
.ShopDetail div:first-child {
  height: 0.8rem;
  margin-top: 0.2rem;
  padding: 0 0.15rem;
}
.ShopDetail div h3 {
  font-size: 0.22rem;
  line-height: 0.8rem;
  color: #3b3b3b;
}
</style>
