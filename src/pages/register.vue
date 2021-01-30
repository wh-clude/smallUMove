<template>
  <div>
    <v-header></v-header>
    <van-form @submit="register">
      <van-field
        v-model="registerList.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-model="registerList.nickname"
        name="昵称"
        label="昵称"
        placeholder="请填写昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
      <van-field
        v-model="registerList.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
import { register } from "../util/axios/index";
export default {
  data() {
    return {
      registerList: {
        phone: "",
        nickname: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      register(this.registerList).then((res) => {
        console.log(res, "11111111");
        if (res.data.code == 200) {
          this.$router.push("/login");
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
