<template>
  <div>
    <v-header></v-header>
    <div class="search">
      <div class="searchBox">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="按内容搜索" v-model="val" />
      </div>
    </div>
    <div class="content">
      <div class="con-left">
        <ul>
          <li
            :class="[active == index ? 'active' : '']"
            @click="changeStyle(index)"
            v-for="(item, index) in cateList"
            :key="item.id"
          >
            {{ item.catename }}
          </li>
        </ul>
      </div>
      <div class="con-right">
        <div class="vessel" v-for="item in cateList" :key="item.id">
          <div v-if="!item.children">
            <h3>这个分类是空的!!!</h3>
          </div>
          <h3>{{ item.catename }}</h3>
          <div class="box">
            <div
              class="shop"
              v-for="itemNext in item.children"
              :key="itemNext.id"
              @click="toList(itemNext.id)"
            >
              <img
                :src="
                  itemNext.img
                    ? $imgUrl + itemNext.img
                    : 'http://p3.music.126.net/YKl4IRmJi4MPTx_cuJfJeQ==/109951165289082650.jpg?param=140y140'
                "
                alt=""
              />
              <p>{{ itemNext.catename }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCateTree } from "../util/axios/index";
export default {
  data() {
    return {
      active: 0,
      val: "",
      cateList: [],
    };
  },
  mounted() {
    getCateTree().then((res) => {
      // console.log(res, "nnnnnnnn");
      if (res.data.code === 200) {
        this.cateList = res.data.list;
      }
    });
  },
  methods: {
    changeStyle(idx) {
      this.active = idx;
    },
    toList(id) {
      this.$router.push("/list?id=" + id);
    },
  },
};
</script>

<style lang="" scoped>
@import "../assets/css/classify.css";
</style>
