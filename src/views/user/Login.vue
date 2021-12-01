<template>
  <div>
    <div class="header">
      <div class="logo">
        <img src="../../static/img/login_top_bg.png" alt="default_logo" />
        <img src="../../static/img/login_wzms_icon.png" alt="" class="title" />
        <span
          @click="close()"
          style="color: #285fb4; position: absolute; top: 2%; left: 4%"
          >关闭</span
        >
      </div>
    </div>
    <div class="content">
      <van-field
        placeholder="请输入用户名/手机号/卡号/身份证"
        @focus="replace()"
        @blur="cancel()"
        v-model="phoneNumber"
        :clearable="true"
        :error-message="phoneNumberError"
        style="margin-left: 10px; margin-top: 2px; font-size: 12px"
      />
      <img :src="userAvator ? userAvator : clickAvator" alt="" />
      <div class="line"></div>
      <!-- eye -->
      <van-field
        placeholder="请输入6-18位数字字母组合"
        v-model="password"
        :clearable="true"
        @focus="replace1()"
        @blur="cancel1()"
        :type="passwordType"
        style="margin-left: 10px; margin-top: 2px; font-size: 12px"
      >
        <van-icon
          slot="right-icon"
          @click="switchPasswordType"
          :name="passwordIcon"
        />
      </van-field>

      <!-- <van-field
        v-else
        placeholder="短信验证码"
        v-model="password"
        left-icon="comment-o"
        type="text"
      >
        <VerifyCodeBtn slot="button" @sendVerifyCode="sendVerifyCode" />
      </van-field> -->
      <img
        :src="passwordImg ? passwordImg : clickPassword"
        alt=""
        style="position: absolute; top: 34%"
      />
      <div class="line"></div>

      <van-field
        placeholder="请输入验证码"
        v-model="verificationCode"
        @focus="replace2()"
        @blur="cancel2()"
        style="margin-left: 10px; font-size: 12px"
      >
        <VerificationCode
          :value.sync="validCode"
          slot="button"
        ></VerificationCode>
      </van-field>
      <div class="line" style="margin-top: -10px"></div>
      <img
        :src="vCode ? vCode : clickVcode"
        alt=""
        style="position: absolute; top: 41%"
      />
      <div class="button-wrap">
        <van-button @click="handleLogin" block color="#285fb4" :hairline="true" :loading="loading"
          >登录</van-button
        >
      </div>
      <div class="more-wrap">
        <router-link class="link" to="/register">忘记密码?</router-link>
        <!-- 手机验证码 -->
        <!-- <div class="switch-way" @click="switchLoginWay">
          {{ loginWayObj.toggleMsg }}
        </div> -->
      </div>
      <footer>
        <div class="foot">
          <router-link class="openAccount" to="/openAccount">
            <span style="color: #285fb4">网上开户</span>
            <i style="color: black">></i>
          </router-link>
          <div class="lineRight"></div>
          <router-link class="openAccount" to="/register">
            <span style="color: #285fb4">手机银行注册</span>
            <i style="color: black">></i>
          </router-link>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
import { Field, Icon, Button } from "vant";
import { mapActions,mapState } from "vuex";
import {checkePWD} from "@/utils/index";
import VerifyCodeBtn from "@/components/VerifyCodeBtn";
import VerificationCode from "@/components/verificationCode";
export default {
  name: "Login",
  data() {
    return {
      userAvator: require("../../static/img/login_account_icon_normal@2x.png"), //未聚焦时用户icon
      clickAvator: require("../../static/img/login_account_icon@2x.png"), //聚焦时用户icon
      passwordImg: require("../../static/img/login_psw_icon_normal@2x.png"), //未聚焦时密码icon
      clickPassword: require("../../static/img/login_psw_iconl@2x.png"),
      vCode: require("../../static/img/login_imagecode_icon_normal@2x.png"),
      clickVcode: require("../../static/img/login_imagecode_icon@2x.png"),
      phoneNumber: "13216698987",
      password: "123456",
      code: "",
      verificationCode: "",
      loginWay: "password",
      passwordType: "password",
      phoneNumberError: "",
      validCode: "",
      showDialog:true,
      Tips:"",
    };
  },
  methods: {
    replace() {
      // this.showDialog()
      this.userAvator = "";
    },
    cancel() {
      this.userAvator = require("../../static/img/login_account_icon_normal@2x.png");
    },
    replace1() {
      this.passwordImg = "";
    },
    cancel1() {
      this.passwordImg = require("../../static/img/login_psw_icon_normal@2x.png");
    },
    replace2() {
      this.vCode = "";
    },
    cancel2() {
      this.vCode = require("../../static/img/login_imagecode_icon_normal@2x.png");
    },
    close() {
      this.$router.push("/");
    },
    message() {
      this.$dialog.alert({
        message: this.Tips,
      }).then(() => {
        // on close
      });
    },
    sendVerifyCode() {
      this.phoneNumberError = "";
      if (!this.phoneNumber) {
        // 根据需求做判断
        this.phoneNumberError = "手机号码必填";
      }
    },

    switchPasswordType() {
      this.passwordType =
        this.passwordType === "password" ? "text" : "password";
    },
    switchLoginWay() {
      this.password = this.code = "";
      this.loginWay = this.loginWay === "password" ? "verifyCode" : "password";
    },
    handleLogin() {
      if(this.phoneNumber=='') {
        this.Tips = "请输入用户名"
        this.message()
      }else if(this.password == '') {
         this.Tips = "请输入登录密码"
        this.message()
      }else if(!checkePWD(this.password)) {
          this.Tips = "登录密码应为6-18数字字母组合"
          this.message()
      }else if(this.verificationCode == ''){
        this.Tips = "请输入验证码"
        this.message()
      }else if(this.verificationCode != this.validCode) {
        console.log(this.verificationCode,this.validCode,'ooooo')
        this.Tips = "验证码错误,请重新输入"
        this.message()
      }else{
        const data = {
        phoneNumber: this.phoneNumber,
        password: this.password,
        $router: this.$router,
        $route: this.$route,
      };
      this.login(data);
      }
      
    },
    ...mapActions({
      login: "user/login",
    }),
  },
  computed: {
      ...mapState({
      loading: (state) => state["@@loading"].effects["test/onePlusAsync"],
    }),

    loginWayObj: function () {
      if (this.loginWay === "password") {
        return {
          icon: "closed-eye",
          toggleMsg: "验证码登录",
        };
      }
      return {
        icon: "eye",
        toggleMsg: "密码登录",
      };
    },
    passwordIcon: function () {
      return this.passwordType === "password" ? "closed-eye" : "eye";
    },
  },
  components: {
    [Field.name]: Field,
    [Icon.name]: Icon,
    [Button.name]: Button,
    VerifyCodeBtn,
    VerificationCode,
  },
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    // width: 60px;
    // height: 60px;
    // border-radius: 50%;
    // overflow: hidden;
    img {
      width: 100%;
    }
    .title {
      position: absolute;
      width: 50%;
      height: 7%;
      top: 10%;
      left: 24%;
    }
  }
}
.content {
  width: 100%;
  height: auto;
  padding: 0 15px;
  box-sizing: border-box;
  img {
    width: 20px;
    position: absolute;
    height: 20px;
    top: 27%;
  }
  .button-wrap {
    width: 100%;
    height: auto;
    margin-top: 15px;
  }
  .line {
    width: 100%;
    height: 1px;
    background: #000000;
    transform: scaleY(0.5);
  }
}
.more-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: 200;
  font-size: 12px;
  // a.link {
  //   color: #285fb4;
  // }
  // .switch-way {
  //   color: #333;
  // }
}
.foot {
  display: flex;
  justify-content: space-between;
  margin-top: 240px;

  // position: relative
  // position: absolute;
  // bottom:0%;
  // bottom: -266px;
}
.lineRight {
  height: 25px;
  border-right: 1px solid #000000;
}
</style>
