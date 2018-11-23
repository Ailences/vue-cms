<template>
    <div class="photoinfo-container">
        <h3> {{ photoinfo.title }} </h3>
        <p class="subtitle">
            <span>发表时间: {{ photoinfo.add_time | dateFormat }} </span>
            <span>点击: {{ photoinfo.click }}次</span>
        </p>

        <hr>

        <!-- 缩略图区域 -->
        <div class="thumbs">
          <img class="preview-img" 
          v-for="(item, index) in list" :src="item.src" 
          :key="item.id" height="100" 
          @click="$preview.open(index, list)">
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoinfo.content">

        </div>

        <!-- 评论区 -->
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
// 导入评论组件
import comment from "../../components/comment/";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: [
        {
          src:
            "http://img3.imgtn.bdimg.com/it/u=2748694675,4287383598&fm=26&gp=0.jpg",
          w: 600,
          h: 400
        },
        {
          src:
            "http://a.hiphotos.baidu.com/image/pic/item/2f738bd4b31c870199f156082d7f9e2f0608ff9d.jpg",
          w: 600,
          h: 400
        },
        {
          src:
            "http://d.hiphotos.baidu.com/image/pic/item/6c224f4a20a4462372e426bf9222720e0df3d7c5.jpg",
          w: 600,
          h: 400
        },
        {
          src:
            "http://c.hiphotos.baidu.com/image/pic/item/7dd98d1001e939019b2500e371ec54e737d196cc.jpg",
          w: 600,
          h: 400
        },
        {
          src:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1045168275,4237832889&fm=200&gp=0.jpg",
          w: 600,
          h: 400
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      //  获取图片详情
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        // console.log(result.body);
        if (result.body.status === 0) {
          this.photoinfo = result.body.message[0];
        }
      });
    },
    getThumbs() {
      // 获取缩略图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        // if (result.body.status === 0) {
        //   result.body.message.forEach(item => {
        //     item.w = 600;
        //     item.h = 400;
        //   });
        //   this.list = result.body.message;
        //   console.log(result.body);
        // }
      });
    }
  },
  // 注册评论组件
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="less">
.photoinfo-container {
  padding: 5px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    text-indent: 2em;
    font-size: 13px;
    line-height: 39px;
  }
  .thumbs {
    img {
      margin: 10px;
      box-shadow: 0 0 8px #999;
    }
  }
}
</style>
