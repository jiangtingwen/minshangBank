<template>
  <div class="container">
    <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>
    <div class="setbar">
        <div class="icon">
         <van-image
            width="58%"
            height="12"
            :src="process1Imgurl"
            style="margin-top:8px"
          >
         </van-image>
        </div>
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import { Image, Button } from "vant";

export default {
  data() {
    return {
      title: "用户名设置",
      imgUrl: require("../../../static/img/nvg_back@2x.png"),
      process1Imgurl: require("../../../static/img/progress_1.png"),
      process1Imgur2: require("../../../static/img/progress_2.png"),
      process1Imgur3: require("../../../static/img/progress_3.png"),
    };
  },
  components: {
    [Image.name]: Image,
    [Button.name]: Button,
    vHeader,
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  position: fixed;
  background: #f5f5f5;
  padding-top: 40px;
}
.setbar {
  height: 45px;
  margin: 8px;
  background-color: #ffff;
}
.icon{
    text-align: center;
}
</style>
