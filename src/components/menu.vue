<template>
  <div class="container">
    <header class="title">{{title}}</header>
    <div class="line"></div>
    <div class="listmenu">
      <van-grid square :column-num="4" :border="false">
        <van-grid-item
          :to="item.path"
          v-for="item in menuList"
          :key="item.path"
        >
          <van-image width="30" height="30" :src="item.icon"> </van-image>
          <div style="margin-top: 10px; space-write: no">
            {{ item.desc }}
          </div>
        </van-grid-item>
      </van-grid>
    </div>

    <footer-tabbar />
  </div>
</template>
<script>
import {
  Grid,
  GridItem,
} from "vant";
import FooterTabbar from "components/FooterTabbar";
export default {
 props:{
     menuListCc:{
         type:Array,
         default:() => {[]}
     }
     
 },
  name: "Menu",
  data() {
    return {
        menuList:[],
        title:''
    };
  },
  created(){
  },
  mounted() {
            this.menuList =this.menuListCc
    //   this.title = this.menuListCc.title
      console.log(this.menuListCc,'ssssssss')

},
  components: {
    FooterTabbar,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
  },
  methods: {
    },
};
</script>
<style lang="scss" scoped>
p {
  margin-block-start: 0;
  margin-block-end: 0;
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
.title{
  padding: 10px 10px;
  font-weight: bold;
  font-size: 14px;
  background: #ffffff;
}
.line{
  border-bottom: 1px solid #ededed;
}
.listmenu{
  background: #ffffff;
}


</style>



