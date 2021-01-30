<template>
  <div class="header">
    <div class="flex left" @click="goBack()">
      <img class="leftArrow" :src="headerList.left" alt="" />
    </div>
    <div class="flex center">{{ $route.name }}</div>
    <div class="flex right">{{ headerList.right }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerList: {
        id: 1,
        left: require("../assets/imgs/whiteR.png"),
        right: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="" scoped>
@import "../assets/css/header.css";
</style>