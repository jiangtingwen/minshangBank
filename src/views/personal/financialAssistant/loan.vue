<template>
  <div class="container">
    <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>
    <div class="top">
      <div class="left">
        <p class="monthlyRepayment">每月还款:</p>
        <p class="number">{{ monthlyPayment }}</p>
      </div>
      <div class="right">
        <p class="totalRepayment">总还款:</p>
        <p class="number">{{ totalRepayment }}</p>
      </div>
    </div>
    <div class="middle">
      <p class="totalRepayment" style="margin-top: 10px">总利息:</p>
      <p class="number">{{ totalInterest }}</p>
    </div>
    <div class="enter">
      <van-field
        v-model="totalAmount"
        type="tel"
        label="贷款总金额(元)"
        label-width="120"
        placeholder="请输入金额"
      />
      <van-field
        v-model="theTerm"
        type="digit"
        label="贷款期限(年)"
        label-width="120"
        placeholder="请输入年数"
      />
      <van-field
        v-model="rate"
        type="number"
        label="年利率(%)"
        label-width="120"
        placeholder="请输入年利率"
      />
    </div>
    <div class="calculate">
      <van-button
        type="primary"
        plain
        hairline
        size="large"
        :loading="loading"
        @click="calculate"
        >计算</van-button
      >
    </div>
    <div class="calculate">
      <van-button
        type="primary"
        plain
        hairline
        size="large"
        :loading="loading"
        @click="clear"
        >清除</van-button
      >
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header";
import { Field, Button } from "vant";

export default {
  data() {
    return {
      monthlyPayment: "0.00",
      totalInterest: "0.00",
      title: "存款计算器",
      imgUrl: require("../../../static/img/nvg_back@2x.png"),
      totalAmount: "",
      theTerm: "",
      totalRepayment: "",
      rate: "",
      loading: false,
    };
  },
  methods: {
    calculate() {
      // 1、等额本息还款法:

      // 特点：每月的还款额相同，从本质上来说是本金所占比例逐月递增，利息所占比例逐月递减，月还款数不变。

      // 每月还款=〔贷款本金×月利率×(1+月利率)^还款月数〕÷〔(1+月利率)^还款月数-1〕;

      // 每月应还利息=贷款本金×月利率×〔(1+月利率)^还款月数-(1+月利率)^(还款月序号-1)〕÷〔(1+月利率)^还款月数-1〕;

      // 每月应还本金=贷款本金×月利率×(1+月利率)^(还款月序号-1)÷〔(1+月利率)^还款月数-1〕;

      // 总利息=还款月数×每月月供额-贷款本金。

      // 应计利息精确到小数点后2位，已计息天数按实际持有天数计算
      let totalAmount1 = Number(this.totalAmount), //贷款总金额
        monRate1 = Number(Number(this.rate) / 100 / 12), //月利率
        theTerm1 = Number(this.theTerm); //贷款年限
      console.log(totalAmount1, monRate1, theTerm1);
      let a = Number(1 + monRate1);
      let b = theTerm1 * 12;
      let c = Math.pow(a, b);
      let d = totalAmount1 * monRate1 * c;
      let e = b - 1;
      let f = Math.pow(a, e);

      console.log(d, "sssssssss");
      //   每月还款
      // console.log(a,theTerm1)
      let A = (d/e).toFixed(2);
      this.monthlyPayment = A;
      this.totalInterest = (b * f - totalAmount1).toFixed(2);
      this.totalRepayment = (totalAmount1 + b * f - totalAmount1).toFixed(2);
    },
    clear() {
      this.totalInterest = "0.00";
      this.totalAmount = "";
      this.monthlyPayment = "0.00";
      this.rate = "";
      this.theTerm = "";
      this.totalRepayment = "0.00";
    },
  },
  components: {
    [Field.name]: Field,
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
  padding-top: 42px;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 100px;
}
.left,
.right {
  flex: 1;
  background-color: #59c1dc;
}
.right {
  margin-left: 1px;
}
.middle {
  background-color: #59c1dc;
  min-height: 100px;
}
.monthlyRepayment,
.totalRepayment,
.number,
.totalRepayment {
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
}
.number {
  font-size: 24px;
}
.enter {
  margin-top: 10px;
}
.calculate {
  margin-top: 10px;
  text-align: center;
}
</style>>
