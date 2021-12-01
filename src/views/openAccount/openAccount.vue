<template>
  <div class="container">
      <v-header :title="title" :arrow="true" :textIcon="true" :imgSrc="imgUrl"></v-header>
      <div class="topTitle">
          <van-image width="80%" height="20%" :src="registerIcon"> 
         </van-image>
      </div>
      <div class="middle">
          <van-image  :src="middleIcon" width="90%"> 
        </van-image>
      </div>
      <div class="button">
          <span class="open">马上开户</span>
      </div>
  </div>
</template>

<script>
import vHeader from "@/components/header"
import { TreeSelect, Grid, GridItem, Button,Image } from "vant";

export default {
  name:"openAccount",
  data(){
      return{
          title:"手机网上开户简介",
          text:"完成",
          imgUrl:require("../../static/img/nvg_back@2x.png"),
          registerIcon:require("../../static/img/register_zx_index_top.png"),
          middleIcon:require("../../static/img/register_zx_index_content.png")
      }
  },
  created(){
    //   this.imgUrl=require("../static/img/nvg_back@2x.png")
  },
  methods:{
      openAccount(){

      }
  },

  components: {
    [Button.name]: Button,
    [Image.name]: Image,
    vHeader,

  },

}
</script>

<style lang="scss" scoped>
.body{
    height: 100%;
    width: 100%;
}
.container{
    height: 100%;
    width: 100%;
    background-size:100% auto !important;
    background: url("../../static/img/register_zx_index_bg320.png") no-repeat;
}
.topTitle{
    // height: 100px;
    // width: 100%;
    padding-top: 1.6rem;
    text-align: center;
}
.middle{
    padding-top: 0.6rem;
    text-align: center;
}
.button{
    position: fixed;
    bottom: 10px;
    width: 90%;
    background-color: #285fb4;
    border-radius: 20px;
    left: 20px;
    height: 30px;
    text-align: center;

    line-height: 30px;
}
.open{
    font-size: 14px;
    color: #ffffff;
    line-height:30px
    }
// img{
//     // width: 100%;
//     // height: 100%;
// }
</style>

