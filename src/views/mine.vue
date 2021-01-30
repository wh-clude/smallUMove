<template>
  <div>
    <v-header></v-header>
    <div class="user" v-if="userInfo">
      <van-image
        round
        width="1rem"
        height="1rem"
        class="userLeft"
        src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2171738069,1480855196&fm=111&gp=0.jpg"
      />
      <div class="nickname">用户名：{{ userInfo.nickname }}</div>
    </div>
    <div v-else>
      <van-image
        round
        width="1rem"
        height="1rem"
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2561659095,299912888&fm=26&gp=0.jpg"
      />
      <p class="nickname">用户名：xxxxx</p>
    </div>
    <van-grid :column-num="3">
      <van-grid-item icon="phone-circle-o" text="全部订单" />
      <van-grid-item icon="pending-payment" text="待付款" />
      <van-grid-item icon="logistics" text="待收货" />
    </van-grid>
    <div class="cell">
      <van-cell title="地址管理" is-link>
        <template #icon>
          <van-icon name="location-o" class="address" color="orange" />
        </template>
      </van-cell>
      <van-cell
        title="我的钱包"
        value="200余额"
        value-class="valueClass"
        is-link
      >
        <template #icon>
          <van-icon name="points" class="address" color="orange" />
        </template>
      </van-cell>
      <van-cell title="我的优惠券" is-link>
        <template #icon>
          <van-icon name="balance-pay" class="address" color="orange" />
        </template>
      </van-cell>
      <van-cell title="我的二维码" is-link>
        <template #icon>
          <van-icon name="qr-invalid" class="address" color="orange" />
        </template>
      </van-cell>
      <van-cell title="我的小伙伴" is-link>
        <template #icon>
          <van-icon name="friends-o" class="address" color="orange" />
        </template>
      </van-cell>
      <van-button
        v-if="userInfo"
        :block="true"
        class="out"
        color="orange"
        @click="logout"
        >退 出 登 录</van-button
      >
      <van-button
        v-else
        :block="true"
        class="out"
        color="orange"
        @click="$router.push('/login')"
        >快 去 登 录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  mounted() {
    this.userInfo = sessionStorage.getItem("userInfo")
      ? JSON.parse(sessionStorage.getItem("userInfo"))
      : false;
  },
  methods: {
    logout() {
      sessionStorage.removeItem("userInfo");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="" scoped>
.user {
  margin: 0.2rem 0.2rem;
  overflow: hidden;
}
.userLeft {
  float: left;
  border: 1px solid #0ff;
}
.nickname {
  line-height: 0.2rem;
  float: right;
  margin-top: 0.3rem;
  margin-right: 0.6rem;
  font-size: 0.2rem;
}
.cell {
  margin-top: 0.2rem;
}
.valueClass {
  color: orange;
}
.address {
  font-size: 0.18rem;
  line-height: 0.2rem;
}
.out {
  width: 90%;
  margin: 0.2rem auto;
  border-radius: 0.1rem;
  font-size: 0.2rem;
}
</style>
