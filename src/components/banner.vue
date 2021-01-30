<template>
  <div class="banner">
    <!-- <div class="bannerTop">
      <ul>
        <li :key="item.id" v-for="item in bannerList">
          <img :src="item.img" alt="" />
        </li>
      </ul>
      <p class="dot">
        <span :class="[flag==index?'active':'']" :key="item.id" v-for="(item,index) in bannerList" @click="change(index)"></span>
      </p>
    </div> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
          <img :src="$imgUrl + item.img" alt="" />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

    <div class="bannerBottom">
      <ul>
        <li :key="item.id" v-for="item in kingList">
          <img :src="item.kingpic" alt="" />
          <p class="title">{{ item.title }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import { getBannerList } from "../util/axios/index";
export default {
  data() {
    return {
      flag: 0,
      bannerList: [],
      kingList: [
        {
          id: 1,
          title: "限时秒杀",
          kingpic: require("../assets/imgs/kingkong/brand.png"),
        },
        {
          id: 2,
          title: "畅销商品",
          kingpic: require("../assets/imgs/kingkong/integral.png"),
        },
        {
          id: 3,
          title: "品质大牌",
          kingpic: require("../assets/imgs/kingkong/seckill.png"),
        },
        {
          id: 4,
          title: "小U自营",
          kingpic: require("../assets/imgs/kingkong/selfsupport.png"),
        },
        {
          id: 5,
          title: "积分商城",
          kingpic: require("../assets/imgs/kingkong/top.png"),
        },
      ],
    };
  },
  // components: {
  //   vBannerlist,
  // },
  methods: {
    change(i) {
      this.flag = i;
    },
  },
  mounted() {
    getBannerList().then((res) => {
      // console.log(res);
      if (res.data.code == 200) {
        this.bannerList = res.data.list;
      }
      // console.log(this.bannerList);
    });
    // this.jq.ajax({
    //   url: "",
    //   success: (res) => {
    //     this.$nextTick(() => {
    //       new Swiper(".swiper-container", {
    //         slidesPerView: 1.33,
    //         spaceBetween: 30,
    //         centeredSlides: true,
    //         loop: true,
    //         autoplay: {
    //           delay: 1000,
    //         },
    //         pagination: {
    //           el: ".swiper-pagination",
    //           clickable: true,
    //         },
    //       });
    //     });
    //   },
    // });
  },
  updated() {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: 1.33,
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 1000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>
<style lang="" scoped>
@import url("../assets/css/index.css");
img {
  width: 3.35rem;
  height: 1.95rem;
}
.swiper-slide {
  width: 3.35rem;
}
.swiper-slide.swiper-slide-duplicate {
  width: 3.35rem;
  height: 1.95rem;
}
.banner {
  overflow: hidden;
}
.banner .bannerBottom ul {
  display: flex;
}
.banner .bannerBottom ul li {
  flex: 1;
  text-align: center;
  overflow: hidden;
}
.banner .bannerBottom ul li .title {
  color: #333;
  line-height: 0.1rem;
  margin-top: 0.05rem;
  font-size: 0.2rem;
  width: 1.6rem;
  -webkit-transform-origin-x: 0;
  transform: scale(0.5);
}
.banner .bannerBottom ul li img {
  width: 0.32rem;
  height: 0.32rem;
}
</style>