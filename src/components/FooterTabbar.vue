<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="(item, index) in tabbars"
      :key="'tabber' + index"
      @click="tabIndex(index,item.path)"
    >
      <span>{{ item.title }}</span>
      <template #icon="props">
        <img :src="props.active ? item.active : item.nomal" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import { mapActions, mapGetters, mapState } from "vuex"; // createNamespacedHelpers
export default {
  name: "FooterTabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          path: "/",
          title: "首页",
          active: require("../static/img/CSIIWeb_Recommend_hl.png"),
          nomal: require("../static/img/CSIIWeb_Recommend.png"),
          index:0,
        },
        {
          path: "/bank",
          title: "银行",
          active: require("../static/img/CSIIWeb_Product_hl.png"),
          nomal: require("../static/img/CSIIWeb_Product.png"),
          index:1,
        },
        {
          path: "/personal",
          title: "我的",
          active: require("../static/img/CSIIWeb_Mine_hl.png"),
          nomal: require("../static/img/CSIIWeb_Mine.png"),
          index:2,
        },
      ],
    };
  },
  mounted() {
    //当用户已经登录时
    if (this.$store.state.user.token) {
      // 如果有缓存,刷新页面时还进入该页面
      let index = sessionStorage.getItem("tabIndex");
      // this.tabIndex(index);
    } 
    else {
      //当用户退出登录,或者未登录时,如果用户最后退出时的页面不在个人中心页面时,
      // let index = sessionStorage.getItem("tabIndex");
      // sessionStorage.removeItem("tabIndex")
      if (index == 0 || index == 1) {
        this.tabIndex(index);
      } else {
        //如果最后是在个人中心退出登录时,则点头部关闭按钮时,进入首页
        this.tabIndex(0);
      }
    }
  },
  methods: {
    tabIndex(index) {
      index = Number(index);
      this.active = index;

      //记录当前tab页
      // sessionStorage.setItem("tabIndex", index);
      // console.log(this.active, "sss");
      let val = this.tabbars[index].path;
      this.$router.push({ path: `${val}` }).catch((data) => {});

    },
  },

  computed: {
    token() {
      return this.$store.getters.token;
    },
  },

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
};
</script>
