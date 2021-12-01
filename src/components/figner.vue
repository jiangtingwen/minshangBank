<template>
  <div class="finger-print">
    <!--弹窗-->
    <div class="white_content">
      <div style="height: 160px; text-align: center">
        <div style="padding: 20px">
          <!-- <i class="iconfont" style="font-size: 50px; color: #285fb4"
            >&#xe72f;</i
          > -->
          <van-image
            width="35"
            height="35"
            :src="fingerprint"
          >
          </van-image>
          <p style="font-size: 16px; color: black;font-weight:bold">
            {{ fingertext }}
          </p>
        </div>
      </div>
      <div class="btn">
        <div class="btn-cancel" @click="cancel()">取消</div>
      </div>
    </div>
    <!--覆盖层-->
    <div class="black_overlay"></div>
  </div>
</template>
 
<script>
import { Image } from "vant";

export default {
    
  name: "finger",
  data() {
    return {
        fingerprint: require("@/static/img/grsz_zwdl.png"),

    };
  },
  mounted() {},
  methods: {
    //取消
    cancel() {
      this.$emit("cancel");
    },
  },
    components:{
    [Image.name]: Image,

    },
  props: {
    fingertext: {
      type: String,
      require: true,
    },
  },
  computed: {},
  watch: {},
};
</script>
 
<style scoped>
.finger-print .white_content {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 80%;
  min-height: 150px;
  border: 1px solid #d6e9f1;
  border-radius: 8px;
  background-color: white;
  z-index: 99999999;
  transform: translate(-50%, -50%);
}

.finger-print .btn {
  height: 50px;
  line-height: 50px;
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #f5f5f5;
}

.finger-print .btn .btn-cancel {
  color: #285fb4;
  float: left;
  font-size: 14px;
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 8px;
  border-right: 1px solid #f5f5f5;
  text-align: center;
}
/**
 * 覆盖层样式
 */

.finger-print .black_overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99999998;
  opacity: 0.8;
}
</style>