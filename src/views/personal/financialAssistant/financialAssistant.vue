<template>
  <div class="container">
        <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>

    <div class="select" v-for="(item, index) in calculateData" :key="index">
      <van-cell-group>
        <van-cell :title="item.title" is-link size="large" :to="item.path" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import {  Cell, CellGroup } from "vant";
import vHeader from "@/components/header";

export default {
  data() {
    return {
      title: "金融助手",
      imgUrl: require("../../../static/img/nvg_back@2x.png"),
      calculateData: [
        {
          path: "/deposit",
          title: "存款计算器",
        },
        {
          path: "/loan",
          title: "贷款计算器",
        },
      ],
    };
  },
  components:{
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    vHeader
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  position: fixed;
  background: #f5f5f5;
  padding-top: 50px;
}
.van-cell--large .van-cell__title {
  font-size: 14px !important;
}
</style>>
