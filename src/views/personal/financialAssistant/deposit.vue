<template>
  <div class="container">
    <v-header :title="title" :arrow="true" :imgSrc="imgUrl"></v-header>
    <div class="top">
      <div class="left">
        <p class="monthlyRepayment">利息:</p>
        <p class="number">{{ interest }}</p>
      </div>
      <div class="right">
        <p class="totalRepayment">本息合计:</p>
        <p class="number">{{ totalInterest }}</p>
      </div>
    </div>
    <!-- <div class="middle">
        <p class="totalInterest">
            总利息
        </p>
    </div> -->
    <div class="enter">
      <van-field
        v-model="totalAmount"
        type="tel"
        label="存款总金额(元)"
        label-width="120"
        placeholder="请输入金额"
      />
      <van-field
        v-model="theTerm"
        type="digit"
        label="存款期限(天)"
        label-width="120"
        placeholder="请输入天数"
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
      interest: "0.00",
      totalInterest: "0.00",
      title: "存款计算器",
      imgUrl: require("../../../static/img/nvg_back@2x.png"),
      totalAmount: "",
      theTerm: "",
      rate: "",
      loading: false,
    };
  },
  methods: {
    calculate() {
      //   本金×年利率（百分数）×存期
      // 本息合计=本金+利息
      //  应计利息=本金×利率×时间
      // 应计利息精确到小数点后2位，已计息天数按实际持有天数计算
      let totalMoney = Number(this.totalAmount),
        interestRate = Number(this.rate),
        dateRate = interestRate / 100 / 360,
        theTerm = Number(this.theTerm);
      let interestMoney = (totalMoney * theTerm * dateRate).toFixed(2);
      this.interest = interestMoney;
      let allMoney = Number(interestMoney) + totalMoney;
      console.log(totalMoney, dateRate, theTerm, interestMoney, "计算");
      this.totalInterest = allMoney;
      // this.interest = (Number(this.totalAmount)*(Number(this.rate)/360)*Number(this.theTerm)).toFixed(2)
      // this.totalInterest = (Number(this.interest) + Number(this.totalAmount)).toFixed(2)
    },
    mounted(){
        this.interest = "0.00",
        this.totalInterest = "0.00"
    },
    clear() {
      (this.interest = "0.00"),
        (this.totalAmount = ""),
        (this.rate = ""),
        (this.theTerm = "");
      this.totalInterest = "0.00";
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
  min-height: 140px;
}
.left,
.right {
  flex: 1;
  background-color: #59c1dc;
}
.right {
  margin-left: 1px;
}
.monthlyRepayment,
.totalRepayment,
.number {
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
