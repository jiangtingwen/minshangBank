<template>
  <div class="container" ref="container">
    <v-header
      :title="title"
      :arrow="false"
      :textIcon="true"
      :imgSrc="imgUrl"
    ></v-header>
  <div class="content" style="padding-top:40px">

    <div class="title">账户信息</div>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(0, 6)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">转账汇款</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(6, 14)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">投资理财</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(14, 20)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">贷款管理</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(20, 23)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">客户服务</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(23, 28)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">安全中心</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(28, 31)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <header class="title">其他功能</header>
    <div class="line"></div>
    <div class="listmenu other">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList.slice(31, 35)"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>
      </div>

    <footer-tabbar />
  </div>

  <!-- <div class="list-wrap">
      <vo-pages :data="list"
                @pullingUp="pullingUp"
                @pullingDown="pullingDown"
                :loadedAll="loadedAll">
        <ul class="article-list">
          <li class="article"
              v-for="article in list"
              :key="article.id">
            <div class="left">
              <img v-lazy="article.imageUri"
                   alt="thumb" />
            </div>
            <div class="right">
              <p>{{ article.title }}</p>
              <p class="more-info">
                <span class="author">作者：{{ article.author }}</span>
                <span class="time">发布时间：{{article.displayTimeFormart}}</span>
              </p>
            </div>
          </li>
        </ul>
      </vo-pages>
    </div> -->
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
import { fetchList } from "api/article";
import dayjs from "dayjs";
import FooterTabbar from "components/FooterTabbar";
import Menu from "components/menu";
import BScroll from "better-scroll";
import vHeader from "@/components/header";
import VoPages from "vo-pages";
import "vo-pages/lib/vo-pages.css";
export default {
  name: "Bank",
  data() {
    return {
      title: "银行",
      text: "完成",
      imgUrl: require("../static/img/nvg_back@2x.png"),

      active: 1,
      list: [],
      total: 0,
      page: 1,
      loadedAll: false,
      menuList: [
        // 账户管理

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
          path: "/accountLink",
          icon: require("../static/img/xyk_kpgl.png"),
          desc: "账户关联",
        },

        // 转账汇款

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
          path: "/transferManagement",
          icon: require("../static/img/zzhk_sjhzh.png"),
          desc: "手机转账管理",
        },
        {
          path: "/transferCancel",
          icon: require("../static/img/lc_kcxlccp.png"),
          desc: "转账撤销",
        },
        {
          path: "/transactionInquiry",
          icon: require("../static/img/zzhk_zzjgcx.png"),
          desc: "转账交易查询",
        },
        {
          path: "/payeeManagement",
          icon: require("../static/img/zzhk_skrwh.png"),
          desc: "收款人管理",
        },
        {
          path: "/fundCollection",
          icon: require("../static/img/yh_zjgj.png"),
          desc: "资金归集",
        },
        //投资理财

        {
          path: "/liveToCertainly",
          icon: require("../static/img/cxfw_hzd.png"),
          desc: "活转定",
        },
        {
          path: "/CertainlyTolive",
          icon: require("../static/img/cxfw_dzh.png"),
          desc: "定转活",
        },
        {
          path: "/callTransfer",
          icon: require("../static/img/cxfw_tzckkh.png"),
          desc: "通知存款转入",
        },

        {
          path: "/callWithdrawal",
          icon: require("../static/img/cxfw_zqtzck.png"),
          desc: "通知存款支取",
        },
        {
          path: "/depositBuy",
          icon: require("../static/img/cxfw_sxb.png"),
          desc: "约定存款购买",
        },
        {
          path: "/depositWithdrawal",
          icon: require("../static/img/xyk_xjfq.png"),
          desc: "约定存款支取",
        },
        // 贷款管理
        {
          path: "/myLoan",
          icon: require("../static/img/gdzx_dkzhcx.png"),
          desc: "我的贷款",
        },
        {
          path: "/loanIssuance",
          icon: require("../static/img/gdzx_jk.png"),
          desc: "贷款发放",
        },
        {
          path: "/loanRepayment",
          icon: require("../static/img/gdzx_hk.png"),
          desc: "贷款归还",
        },
        // 客户服务
        {
          path: "/usernameSet",
          icon: require("../static/img/edit_user_info.png"),
          desc: "用户名设置",
        },
        {
          path: "/informationSet",
          icon: require("../static/img/gd_grsz.png"),
          desc: "个人资料修改",
        },
        {
          path: "/logQuery",
          icon: require("../static/img/xyk_cxmx.png"),
          desc: "个人日志查询",
        },
        {
          path: "/residentInformation",
          icon: require("../static/img/xyk_cxmx.png"),
          desc: "税收居民信息",
        },
        {
          path: "/validPeriod",
          icon: require("../static/img/edit_user_info.png"),
          desc: "证件有效期更新",
        },
        // 安全中心
        {
          path: "/changePassword",
          icon: require("../static/img/grsz_dlmmxg.png"),
          desc: "修改登录密码",
        },
        {
          path: "/reservedInformation",
          icon: require("../static/img/grsz_ylxxxg.png"),
          desc: "预留信息设置1",
        },
        {
          path: "/equipmentManagement",
          icon: require("../static/img/grsz_ylxxxg.png"),
          desc: "设备管理",
        },
        // 其他功能
        {
          path: "/personalSet",
          icon: require("../static/img/wdzh_zhcx.png"),
          desc: "个人设置",
        },
        {
          path: "/financialAssistant",
          icon: require("../static/img/wdzh_jymx.png"),
          desc: "金融助手",
        },
        {
          path: "/networkMap",
          icon: require("../static/img/wdzh_cfzl.png"),
          desc: "网点地图",
        },
        {
          path: "/scan",
          icon: require("../static/img/ewm_sys.png"),
          desc: "扫一扫",
        },
      ],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    initScroll() {
      //将需要滚动的页面包裹进BScroll,使可以滚动
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true, //设置可滚动页面的内容可以被点击
        bounce: true, //设置往上滑时，内容到底时,是否需要一个弹的效果
      });
    },
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    VoPages,
    FooterTabbar,
    Menu,
    BScroll,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
    vHeader,
  },
  methods: {
    pullingDown() {
      this.beforePullDown = false;
      this.page = 1;
      this.getList(false);
    },
    pullingUp() {
      this.page += 1;
      this.getList();
    },
    async getList(loadMore = true) {
      const data = {
        page: this.page,
      };
      const result = await fetchList(data);
      this.total = result.data.total;
      const newList = result.data.items.map((article) => {
        article.displayTimeFormart = dayjs(article.display_time).format(
          "YYYY-MM-DD"
        );
        return article;
      });
      if (loadMore) {
        this.list = this.list.concat(newList);
      } else {
        this.list = newList;
      }
      if (!this.beforePullDown) {
        this.beforePullDown = true;
      }
      this.loadedAll = this.total <= this.list.length;
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  margin-block-start: 0;
  margin-block-end: 0;
}
body{
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.container {
  padding-bottom: 60px;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  .list-wrap {
    height: calc(100% - 50px);
    overflow-y: hidden;
  }
}

// .container::-webkit-scrollbar{
//     width: 0 !important
// }
.title {
  padding: 10px 10px;
  font-weight: bold;
  font-size: 14px;
  background: #ffffff;
}
.line {
  border-bottom: 1px solid #ededed;
}
.listmenu {
  font-family: LiHei Pro Medium;
  background: #ffffff;
  margin-bottom: 8px;
}
.other {
  margin-bottom: 1px;
}
.article-list {
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 15px 15px 0;
  .article {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 10px 15px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 6px #e3e3e3;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
    }
    .right {
      padding-left: 15px;
      box-sizing: border-box;
      display: flex;
      width: 235px;
      height: 80px;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      p {
        width: 100%;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
      }
      .more-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #666;
      }
    }
  }
}
</style>
