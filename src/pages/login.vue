<template>
  <div>
    <v-header></v-header>
    <van-form @submit="login">
      <van-field
        v-model="loginList.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="loginList.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >登 录</van-button
        >
      </div>
      <div style="margin: 16px">
        <van-button round block plain type="info" to="/register"
          >还没有账号---->>去注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { login } from "../util/axios/index";
export default {
  data() {
    return {
      loginList: {
        phone: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      login(this.loginList).then((res) => {
        console.log(res, "11111111");
        if (res.data.code == 200) {
          sessionStorage.setItem('userInfo',JSON.stringify(res.data.list))
          this.$router.push("/mine");
          Toast.success(res.data.msg);
        } else {
          Toast.fail(res.data.msg);
        }
      });
    },
  },
};
</script>

<style lang="" scoped>
</style>
