<template>
  <div class="content">
    <v-header
      :title="title"
      :arrow="true"
      :text="text"
      :textIcon="true"
      :imgSrc="imgUrl"
    ></v-header>

    <!-- <div class="top">
      <div class="return" @click="exit(params)">
        <img
          src="../static/img/nvg_back@2x.png"
          style="width: 40px; height: 40px"
          alt=""
        />
      </div>
      <div
        class="menulist"
        style="font-size: 18px; font-weight: bold; padding-top: 7px"
      >
        菜单列表
      </div>
      <div class="conplete" style="padding: 10px 10px; color: blue">完成</div>
    </div> -->
    <div class="container">
      <div class="left">
        <div
          class="leftSide"
          :class="{ active: categoryIndex == index }"
          v-for="(item, index) in items"
          :key="index"
          @click="change(index)"
        >
          <van-image width="20" height="20" :src="item.icon"> </van-image>
          <div class="name">{{ item.text }}</div>
        </div>
      </div>
      <div class="right">
        <ul>
          <li
            class="right-item"
            ref="rightItem"
            v-for="(menu, i) in copyItems"
            :key="i"
          >
            <ul>
              <li
                v-for="(item, j) in menu.children"
                :key="j"
                style="margin-bottom: 40px"
                @click="select(item)"
              >
                <van-image
                  class="icon"
                  v-show="item.status == 0"
                  :src="urlImage"
                  width="20"
                  height="20"
                ></van-image>

                <div class="img">
                  <van-image
                    width="25"
                    height="25"
                    :src="item.icon"
                    style="top: 50%; margin-top: -12px"
                  >
                  </van-image>
                </div>

                <div class="data-wrapper">
                  <div class="data">{{ item.text }}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <footer-tabbar />
  </div>
</template>

<script>
import { TreeSelect, Grid, GridItem, Image } from "vant";
import { mapActions, mapMutations, mapState } from "vuex"
import FooterTabbar from "components/FooterTabbar";
import vHeader from "@/components/header"
export default {
  name: "menuList",
  data() {
    return {
      title: "菜单列表",
      text: "完成",
      imgUrl: require("../static/img/nvg_back@2x.png"),

      categoryIndex: 0,
      copyItems: [],
      urlImage: require("../static/img/succeed.png"),
      items: [
        {
          // 导航名称
          text: "账户管理",
          icon: require("../static/img/yh_wdzh.png"),
          children: [
            {
              // 名称
              text: "扫一扫",
              icon: require("../static/img/ewm_sys.png"),
              status: '0', //定义选中状态,0为成功
              id: 1,
            },
            {
              icon: require("../static/img/xyk_dzzh.png"),
              text: "网上开户",
              status: '0',
              id: 2,
            },
            {
              icon: require("../static/img/xyk_sjzc.png"),
              text: "手机银行注册",
              status: '0',
              id: 3,
            },
            {
              icon: require("../static/img/wdzh_zhcx.png"),
              text: "账户信息",
              status: '0',
              id: 4,
            },
            {
              icon: require("../static/img/wdzh_jymx.png"),
              text: "交易明细",
              status: '0',
              id: 5,
            },
            {
              icon: require("../static/img/wdzh_cfzl.png"),
              text: "我的财富",
              status: '0',
              id: 6,
            },
            {
              icon: require("../static/img/xyk_kpgl.png"),
              text: "账户关联",
              status: '0',
              id: 6,
            },
          ],
        },
        {
          // 导航名称
          text: "转账汇款",
          icon: require("../static/img/yh_zzhk.png"),
          children: [
            {
              // 名称
              icon: require("../static/img/zzhk_tmzz.png"),
              text: "同名转账",
              status: '0',
              // id，作为匹配选中状态的标识符
              id: 1,
            },
            {
              icon: require("../static/img/zzhk_hnzz.png"),
              text: "行内转账",
              status: '0',
              id: 2,
            },
            {
              icon: require("../static/img/zzhk_khzz.png"),
              text: "跨行转账",
              status: '0',
              id: 3,
            },
            {
              icon: require("../static/img/lc_kcxlccp.png"),
              text: "转账撤销",
              status: '0',
              id: 4,
            },
            {
              icon: require("../static/img/zzhk_zzjgcx.png"),
              text: "转账查询",
              status: '0',
              id: 5,
            },
            {
              icon: require("../static/img/zzhk_skrwh.png"),
              text: "收款人管理",
              status: '0',
              id: 6,
            },
          ],
        },
        {
          // 导航名称
          text: "投资理财",
          icon: require("../static/img/lc_lccs.png"),

          children: [
            {
              // 名称
              icon: require("../static/img/cxfw_hzd.png"),
              text: "活转定",
              status: '0',
              id: 1,
            },
            {
              icon: require("../static/img/cxfw_dzh.png"),
              text: "定转活",
              status: '0',
              id: 2,
            },
            {
              icon: require("../static/img/cxfw_tzckkh.png"),
              status: '1',
              text: "通知存款存入",
              id: 3,
            },
            {
              icon: require("../static/img/cxfw_zqtzck.png"),
              text: "通知存款支取",
              status: '1',
              id: 4,
            },
            {
              icon: require("../static/img/xyk_xjfq.png"),
              text: "约定存款支取",
              status: '0',
              id: 5,
            },
          ],
        },

        {
          icon: require("../static/img/yh_gdzx.png"),
          text: "贷款管理",
          children: [
            {
              // 名称
              icon: require("../static/img/gdzx_dkzhcx.png"),
              text: "我的贷款",
              status: '0',
              id: 1,
            },
            {
              icon: require("../static/img/gdzx_jk.png"),
              text: "贷款发放",
              status: '1',
              id: 2,
            },
            {
              icon: require("../static/img/gdzx_hk.png"),
              text: "贷款归还",
              status: '1',
              id: 3,
            },
          ],
        },
        {
          icon: require("../static/img/gd_grsz.png"),

          text: "客户服务",
          children: [
            {
              // 名称
              icon: require("../static/img/edit_user_info.png"),
              text: "用户名设置",
              status: '0',
              id: 1,
            },
            {
              icon: require("../static/img/gd_grsz.png"),
              text: "个人资料修改",
              status: '1',
              id: 2,
            },
            {
              icon: require("../static/img/xyk_cxmx.png"),
              text: "个人日志查询",
              status: '1',
              id: 3,
            },
            {
              icon: require("../static/img/xyk_cxmx.png"),
              text: "税收居民信息",
              status: '1',
              id: 4,
            },
          ],
        },
        {
          text: "安全中心",
          icon: require("../static/img/grsz_ylxxxg.png"),

          children: [
            {
              // 名称
              icon: require("../static/img/grsz_dlmmxg.png"),
              text: "修改登录密码",
              status: '0',
              id: 1,
            },
            {
              icon: require("../static/img/grsz_ylxxxg.png"),
              text: "预留信息设置",
              status: '0',
              id: 2,
            },
          ],
        },
      ],
    };
  },
  created() {
    this.copyItems = this.items.slice();
    this.categoryIndex = 0;
    this.change(0);
    console.log(this.copyItems, this.items, "初始化");
  },
    computed: {
    ...mapState({
      loading: (state) => state["@@loading"].effects["test/onePlusAsync"],
    }),
  },

  methods: {
    select(items) {
      if(items.status == '0')
      {
        this.$set(items,"status",'1')
      }else if(items.status == '1') {
        this.$set(items,"status",'0')
      }
      // console.log(this.items)
      console.log(items, "被选中");
    },
    exit() {
      this.$router.push("/home");
    },
    change(index) {
      this.categoryIndex = index;
      // console.log(copyItems)
      console.log(this.categoryIndex, "ooo");
      if (this.categoryIndex == 0) {
        console.log(this.copyItems, "走");
        this.copyItems = this.items.slice(0, 1);
      } else if (this.categoryIndex == 1) {
        this.copyItems = this.items.slice(1, 2);
      } else if (this.categoryIndex == 2) {
        this.copyItems = this.items.slice(2, 3);
      } else if (this.categoryIndex == 3) {
        this.copyItems = this.items.slice(3, 4);
      } else if (this.categoryIndex == 4) {
        this.copyItems = this.items.slice(4, 5);
      } else {
        this.copyItems = this.items.slice(5, this.items.length);
      }
    },
  },
  components: {
    [TreeSelect.name]: TreeSelect,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    vHeader,
    FooterTabbar,
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar{
    display:none;
}
.content {
  min-height: 100%;
  width: 100%;
}
.top {
  display: flex;
  justify-content: space-between;
}
.container {
  display: flex;
  min-height: 100%;
  padding-top: 40px;
}
.left {
  display: flex;
  min-height: 100%;
  position: fixed;
  background: #ffffff;
  width: 50vw;
  flex-direction: column;
}
.right {
  display: flex;
  min-height: 100%;
  background: #ededed;
  width: 50vw;
  margin-left: 50%;
  padding: 24px 20px;
  flex-direction: column;
}


.leftSide {
  display: flex;
  // margin-bottom: 15px;
  padding-left: 0.3rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  align-items: center;
  &.active {
    background: #e3e7f1;
    // border-right: 3px solid #1890ff;
  }
}
// .leftSide:active {
//     background-color: rgba(46, 103, 222, 0.13);
// }
.name {
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
}
.img {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  margin-left: 1.3rem;
  text-align: center;
  background: #ffffff;
}
.icon {
  position: absolute;
  right: 1.6rem;
}

.data {
  font-size: 12px;
  text-align: center;
}
</style>>

