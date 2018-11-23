<template>
  <div class="photoslist-contanier">
    <!-- 顶部滑动条 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getPhotoListById(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表区 -->
    <ul class="photo-list">
        <router-link :to="'/home/photoinfo/' + item.id" v-for="item in list" :key="item.id" tag="li">
            <img v-lazy="item.img_url">
            <div class="photo-info">
                <h1 class="photo-title"> {{ item.title }} </h1>
                <div class="photo-detail"> {{ item.zhaiyao }}</div>
            </div>
        </router-link>
    </ul>
  </div>
</template>


<script>
import mui from "../../lib/mui/js/mui.js";

export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    // 默认进入页面，就主动请求 所有图片列表的数据
    this.getPhotoListById(0);
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // 拼接一个 全部 的 分类
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
          //   console.log(this.cates);
        }
      });
    },
    getPhotoListById(cateId) {
      // 根据 分类Id，获取图片列表
      this.$http.get("api/getimages/" + cateId).then(result => {
        if (result.body.status === 0) {
          this.list = result.body.message;
          console.log(this.list);
        }
      });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  }
};
</script>


<style lang="less">
.photoslist-contanier {
  touch-action: pan-y;
  .photo-list {
    list-style: none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li {
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img {
        width: 100%;
        vertical-align: middle;
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }

      .photo-info {
        color: white;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 84px;
        overflow: hidden;
        .photo-title {
          font-size: 14px;
        }
        .photo-detail {
          font-size: 13px;
        }
      }
    }
  }
}
</style>
