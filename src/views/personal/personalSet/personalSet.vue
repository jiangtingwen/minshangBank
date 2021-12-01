<template>
  <div class="container">
    <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>
    <div class="list">
      <div class="select" v-for="(item, index) in setData" :key="index">
        <van-cell-group>
          <van-cell
            :title="item.title"
            is-link
            size="large"
            :to="item.path"
            :icon="item.imgUrl"
          />
        </van-cell-group>
      </div>
      <div class="button">
        <div class="leftIcon">
          <van-image
            width="25"
            height="25"
            :src="fingerprint"
            style="top: 50%; margin-left: 17px"
          >
          </van-image>
          <div style="font-size: 14px">指纹登录</div>
        </div>
        <div class="rightIcon">
          <van-switch v-model="checked" size="28px" @change="change"/>
        </div>
      </div>

      <finger
        v-if="showFinger"
        :fingertext="fingertext"
        @cancel="cancel_from"
      ></finger>
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import Finger from "@/components/figner";
import { Grid, GridItem, Image, Cell, CellGroup, Switch, } from "vant";

export default {
  data() {
    return {
      title: "个人设置",
      checked: false,
      fingertext: "请验证指纹",
      showFinger: false,
      imgUrl: require("../../../static/img/nvg_back@2x.png"),
      fingerprint: require("../../../static/img/grsz_zwdl.png"),
      setData: [
        {
          path: "/usernameSet",
          title: "用户名设置",
          imgUrl: require("../../../static/img/edit_user_info.png"),
        },
        {
          path: "/materialChange",
          title: "个人资料修改",
          imgUrl: require("../../../static/img/gd_grsz.png"),
        },
        {
          path: "/changePassword",
          title: "修改登录密码",
          imgUrl: require("../../../static/img/grsz_dlmmxg.png"),
        },
        {
          path: "/reservedInformation",
          title: "预留信息设置",
          imgUrl: require("../../../static/img/grsz_ylxxxg.png"),
        },
      ],
    };
  },
  methods: {
    change(){
      this.showFinger = !this.showFinger
    },
    cancel_from(){
      this.showFinger = false
    }
  },
  components: {
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Switch.name]: Switch,
    Finger,
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
.line {
  position: relative;
  // margin-top: 1px;
}
.line::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: black;
  transform: scaleY(0.5);
}
.select:nth-of-type(1) {
  margin-top: 8px !important;
}
// .select:nth-of-type(5) {
//   margin-top: 8px !important;
// }

.van-icon__image {
  width: 20px;
  height: 20px;
}
.van-cell--large .van-cell__title {
  font-size: 13px !important;
  margin-left: 10px;
}
.button {
  width: 100%;
  background-color: #ffffff;
  margin-top: 8px;
  height: 45px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.leftIcon {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightIcon {
  margin-right: 15px;
}
.van-switch {
  background-color: #f5f5f5;
}
.van-switch--on {
  background-color: #1989fa;
}
</style>>
