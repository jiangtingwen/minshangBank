<template>
  <div class="header">
    <!-- 返回箭头 -->
    <div class="header_arrow" v-if="arrow" @click="getBack()">
      <slot name="header_arrow">
        <img :src="imgSrc" alt="" slot="header_arrow"/>
      </slot>
    </div>
    <!-- 中间标题问题 -->
    <div class="header_title">
      <slot name="header_title">
        <span>{{ title }}</span>
      </slot>
    </div>
    <!-- 文字与图标 -->
    <div class="header_icon" v-if="textIcon">
      <slot name="header_icon">
        <span>{{ text }}</span>
      </slot>
    </div>


  </div>

</template>
 
<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
    text: {
      type: String,
    },
    arrow:{
        type:Boolean
    },
    textIcon:{
        type:Boolean
    }
  },
  methods: {
    // 返回上一页
    getBack() {
      this.$router.back('-1');
    },
  },
};
</script>
<style lang="scss" scoped>
.header {
  border-bottom: 2px solid green;
  position: fixed;
  top: 0;
  z-index: 10000;
  left: 0;
  right: 0;
  padding-right: 10px;
  height: 38px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_arrow{
    position: fixed;
    left: 0;
}

img{
    width: 40px;
    height: 40px;
}
.header_title{
  font-size: 16px;
  color: #000000;
  font-weight: bold;

}
.header_icon{
    position: fixed;
    right: 10px;
    color:#285fb4
}
// 左中右布局, 直接给中间的盒子设置flex:1;
// .header .header_title {
//   flex: 1;
//   height: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   font-size: 16px;
//   color: #000000;
//   font-weight: bold;
//   margin-left: -5%;
// //   margin-right: -20%;
// }
// .header_arrow {
//   width: 4%;
//   height: 4%;
// }
// .header_arrow img {
//   width: 30px;
//   height: 30px;
//   vertical-align: middle;
// }
// .header_icon {
//   width: 20%;
//   font-size: 14px;
//   color: #115ffb;
// }
</style>
