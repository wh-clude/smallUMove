<template>
  <div>
    <v-header></v-header>
    <div v-if="goods">
      <van-card
        v-for="(list, idx) in goods"
        :key="idx"
        centered
        :price="list.price"
        :title="list.goodsname"
        :origin-price="list.market_price"
        :thumb="$imgUrl + list.img"
      >
        <template #footer>
          <van-button class="buy" size="large"  @click="toDetail(list.id)">立即购买</van-button>
        </template>
      </van-card>
    </div>
    <div v-else class="vacancySpace">
      <h2>此分类暂无商品！</h2>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../util/axios/index";
export default {
  data() {
    return {
      goods: [],
    };
  },
  mounted() {
    getGoods(this.$route.query.id).then((res) => {
      if (res.data.code === 200) {
        console.log(res.data.list);
        this.goods = res.data.list;
      }
    });
  },
  methods: {
    toDetail(id) {
      this.$router.push("/detail?id=" + id);
    },
  },
};
</script>

<style lang="" scoped>
.buy{
    margin-right: .3rem;
    color: #fff;
    background: #f26b10;
}
</style>
