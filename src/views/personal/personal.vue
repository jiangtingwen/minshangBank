<template>
  <div class="wrapper">
    
    <v-header :title="title"></v-header>

    <div class="content">
      
      <div class="personal">
        <div class="name">
          <span style="font-weight: bold">蒋廷文</span>
          <span style="font-weight: bold">您好</span>
          <span class="version">版本信息:V2.4.11</span>
        </div>
        <div class="date">
          <span>上次登录时间:2021-11-26 16:24:10</span>
        </div>
        <div class="message">
          <span>用户预留信息:温州民商银行</span>
        </div>
      </div>
      <div class="common menu">
        <van-grid :column-num="2" :border="true" direction="horizontal">
          <van-grid-item
            style="height: 60px"
            :to="item.path"
            v-for="item in menuList"
            :key="item.path"
            :text="item.desc"
            :icon="item.icon"
          >
          </van-grid-item>
        </van-grid>
      </div>
      <div class="list">
         <div class="select" v-for="(item, index) in cellData" :key="index">
           <van-cell-group>
          <van-cell :title="item.title" is-link size="small" :to="item.path"/>
           </van-cell-group>
          <!-- <div class="line"></div> -->
        </div>
      </div>
      <div class="exit">
        <van-button @click="logout" block color="#ffffff" :hairline="true"
          ><span style="color: #285fb4">退出登录</span></van-button
        >
      </div>
    </div>
    <footer-tabbar />
    
  </div>
</template>

<script>
import vHeader from "@/components/header";
import FooterTabbar from "components/FooterTabbar";
import { mapActions } from "vuex";

import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
  Cell,
  CellGroup,
} from "vant";
export default {
  data() {
    return {
      title: "个人中心",
      rightIcon: require("../../static/img/ic_arrow_right.png"),
      menuList: [
        {
          path: "/accountInfo",
          icon: require("../../static/img/wdzh_zhcx.png"),
          desc: "账户信息",
        },
        {
          path: "/transactionDetails",
          icon: require("../../static/img/wdzh_jymx.png"),
          desc: "交易明细",
        },
        {
          path: "/myWealth",
          icon: require("../../static/img/wdzh_cfzl.png"),
          desc: "我的财富",
        },
        {
          path: "/fundCollection",
          icon: require("../../static/img/yh_zjgj.png"),
          desc: "资金归集",
        },
      ],
      cellData: [
        {
          path: "/personalSet",
          title: "个人设置",
        },
        {
          path: "/financialAssistant",
          title: "金融助手",
        },
        {
          title: "网点地图",
        },
        {
          title: "服务协议",
        },
        {
          title: "隐私政策",
        },
        {
          title: "安全提示",
        },
      ],
    };
  },
  methods: {
    exit() {
      console.log("jj");
      this.loginout();
    },
    ...mapActions({
      logout: "user/logout",
    }),
  },
  components: {
    vHeader,
    FooterTabbar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  width: 100%;
  position: fixed;
  background: #f5f5f5;
  padding-top: 40px;
}
.personal {
  background: #ffffff;
  height: 70px;
  padding: 10px 10px;
  font-size: 12px;
  font-weight: lighter;
  line-height: 26px;
}
.select:nth-of-type(1) {
  margin-top: 8px !important;
}
.select:nth-of-type(4) {
  margin-top: 8px !important;
}
.van-cell {
  padding: 10px !important;
}
// .line {
//   position: relative;
// }
// .line::after {
//   content: "";
//   position: absolute;
//   left: 0;
//   right: 0;
//   width: 100%;
//   height: 1px;
//   background-color: #f5f5f5;
//   transform: scaleY(0.5);
// }

.version {
  margin-left: 3.6rem;
}
.exit {
  margin-top: 15px;
}
</style>