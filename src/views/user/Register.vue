<template>
  <div class="wrapper">
    <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>
    <div class="content">
      <div class="set">
        <van-steps :active="active" active-color="#285fb4">
          <van-step>注册信息录入</van-step>
          <van-step>注册信息确认</van-step>
          <van-step>注册结果</van-step>
        </van-steps>
      </div>
    </div>
  </div>
</template>
<script>
import { Step, Steps } from "vant";

import vHeader from "@/components/header";

export default {
  data() {
    return {
      active: 0,
      // activeIcon:require("../../static/img/"),
      title: "注册",
      imgUrl: require("../../static/img/nvg_back@2x.png"),
    };
  },
  components: {
    vHeader,
    [Step.name]: Step,
    [Steps.name]: Steps,
  },
};
</script>
<style lang="scss" scoped>
html,body{
  height: 100%;
  width: 100%;
}
.content{
  background-color: #f5f5f5;
  // width: 100%;
  height: 100%;
  padding: 50px 8px 0px;
}
</style>
