<template>
  <div>
    <v-header></v-header>
    <van-list v-if="cartList.length > 0">
      <van-swipe-cell class="db-cart" v-for="item in cartList" :key="item.id">
        <van-card
          :price="item.price.toFixed(2)"
          :title="item.goodsname"
          centered
          :num="item.num"
          class="goods-card"
          :thumb="
            item.img
              ? $imgUrl + item.img
              : 'https://img01.yzcdn.cn/vant/cat.jpeg'
          "
        >
          <template #footer>
            <van-stepper
              class="step"
              v-model="item.num"
              input-width="40px"
              button-size="32px"
            />
          </template>
        </van-card>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteCart(item.id)"
          />
        </template>
      </van-swipe-cell>
    </van-list>
    <van-list v-else>
      <van-empty description="购物车什么页没有哦~~~"
    /></van-list>
  </div>
</template>

<script>
import { getCartList, cartDelete } from "../util/axios/index";
import { Dialog, Toast } from "vant";
export default {
  data() {
    return {
      num: 1,
      cartList: [],
    };
  },
  mounted() {
    this.getCartList();
  },
  beforeRouteEnter(to, from, next) {
    if (sessionStorage.getItem("userInfo")) {
      next();
    } else {
      Dialog.confirm({
        title: "未登录",
        message: "还没有登录，不能查看购物车",
      })
        .then(() => {
          next("/login");
        })
        .catch(() => {
          next(from.path);
        });
    }
  },
  methods: {
    getCartList() {
      getCartList({
        uid:
          this.$route.query.uid ||
          JSON.parse(sessionStorage.getItem("userInfo")).uid,
      }).then((res) => {
        // console.log(res);
        if (res.data.code === 200) {
          this.cartList = res.data.list ? res.data.list : [];
        }
      });
    },

    deleteCart(id) {
      cartDelete({ id })
        .then((res) => {
          if (res.data.code === 200) {
            this.getCartList();
            Toast.success(res.data.msg);
          } else {
            Toast.fail(res.data.msg);
          }
        })
        .catch((err) => {
          return alert("删除失败！");
        });
    },
  },
};
</script>

<style lang="" scoped>
.db-cart {
  margin-top: 0.1rem;
}
.delete-button {
  height: 100%;
}
</style>
