<template>
  <div class="container">
    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="menu">

       <swiper class="swiper" :options="swiperOptions" ref="mySwiper">
        <swiper-slide>
      <van-grid square :column-num="4">
        <van-grid-item
          :to="item.path"
          v-for="item in itemList.slice(0, 8)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
        </swiper-slide>
           <swiper-slide>
      <van-grid square :column-num="4">
        <van-grid-item
          :to="item.path"
          v-for="item in itemList.slice(8, 16)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
        </swiper-slide>
        <div class="seiper-pagination" style="text-align:center;margin-top:10px"  slot="pagination"></div>
       </swiper>
    </div>
    <!--
    <div class="buttons">
      <van-button type="warning"
                  @click="logout">退出登录</van-button>
      <router-link to="/404">
        <svg-icon icon-class="404" />前往404页面</router-link>
    </div> -->
    <!-- <img :src="img"> -->
    <footer-tabbar />
  </div>
</template>

<script>
import {
  Button,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image,
} from "vant";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { mapActions, mapMutations, mapState } from "vuex"; // createNamespacedHelpers
import FooterTabbar from "components/FooterTabbar";
import img from "assets/webpack.png";
import 'swiper/css/swiper.css'

// const { mapActions } = createNamespacedHelpers('test') // 可使用这种方式直接获得test模板

export default {
  name: "home",
  data() {
    return {
      img,
      value: 1,
      popUp:false,//控制添加组件弹窗
      swiperOptions: {
        observer: true,
        observerParents: true,
        disableOnInteraction: false,
        loop: false,
        pagination: {
          el: ".seiper-pagination",
        },
      },
      images: [
        require("../assets/image/wenzhouIcon/wzms_home.png"),
        require("../assets/image/wenzhouIcon/wzms_home.png"),
        require("../assets/image/wenzhouIcon/wzms_home.png"),
      ],
      itemList: [
        {
          path: "/scan",
          icon: require("../static/img/ewm_sys.png"),
          desc: "扫一扫",
        },
        {
          path: "/openAccount",
          icon: require("../static/img/xyk_dzzh.png"),
          desc: "网上开户",
        },
        {
          path: "/bankRegistration",
          icon: require("../static/img/xyk_sjzc.png"),
          desc: "手机银行注册",
        },
        {
          path: "/accountInfo",
          icon: require("../static/img/wdzh_zhcx.png"),
          desc: "账户信息",
        },
        {
          path: "/transactionDetails",
          icon: require("../static/img/wdzh_jymx.png"),
          desc: "交易明细",
        },
        {
          path: "/myWealth",
          icon: require("../static/img/wdzh_cfzl.png"),
          desc: "我的财富",
        },
        {
          path: "/sameTransfer",
          icon: require("../static/img/zzhk_tmzz.png"),
          desc: "同名转账",
        },
        {
          path: "/intrabankTransfer",
          icon: require("../static/img/zzhk_hnzz.png"),
          desc: "行内转账",
        },
        {
          path: "/InterbankTransfer",
          icon: require("../static/img/zzhk_khzz.png"),
          desc: "跨行转账",
        },
        {
          path:"/add",
          icon: require("../static/img/tj@2x.png"),
          desc: "添加",
        },
      ],
    };
  },
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    FooterTabbar,
    SwiperSlide,
    Swiper,
  },
  computed: {
    ...mapState({
      loading: (state) => state["@@loading"].effects["test/onePlusAsync"],
    }),
  },
  mounted() {
  
  },
  methods: {
    addOne() {
      this.onePlus(1);
    },
    // ...mapActions('home', ['initData', 'plusPage', 'initPage']),
    ...mapActions({
      onePlusAsync: "test/onePlusAsync",
    }),
    ...mapMutations({
      onePlus: "test/onePlus",
      logout: "user/LOGOUT",
    }),
  },
};
</script>
<style lang="scss" scoped>

@import "../style/_mixin.scss";

.container {
  background: rgba(237, 237, 237, 0.6);
  height: auto;
  width: 100%;
  padding-bottom: 50px;
}
.banner {
  width: 100%;
  height: auto;
  padding-bottom: 20px;
  img {
    width: 100%;
    height: 25vh;
  }
}
.menu {
  // background: #ffffff;
  font-size: 12px;
  // padding: 40px 10px;
  // height: 200px;
  // width: 100%;
  // box-sizing: border-box;
  // font-size: 16px;
  // line-height: 30px;
  // display: flex;
  // justify-content: space-around;
  // flex-wrap: wrap;
  // align-items: center;
}


.item {
  font-size: 14px;
  width: 80px;
  white-space: nowrap;
}
.icon {
  width: 0.8rem;
  height: 0.8rem;
}
.buttons {
  padding: 0 15px;
  font-size: 18px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    color: #333;
  }
}
</style>
