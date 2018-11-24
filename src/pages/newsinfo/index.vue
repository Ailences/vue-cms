<template>
    <div class="newsinfo-container">
        <div class="title">
            {{ newsInfo.title }}
        </div>
        <div class="subtitle">
            <span class="ctime mui-pull-left">发表时间: {{ newsInfo.add_time | dateFormat('YY-MM-DD HH:mm:ss')}}</span>
            <span class="click  mui-pull-right">点击:{{ newsInfo.click }}</span>
        </div>
        <hr>
        <div class="content" v-html="newsInfo.content"></div>
        <hr>
        <comment :id="id"></comment>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../../components/comment";

export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        //   console.log(result.body)
        //   console.log(this.id)
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取新闻详情失败!请重试!");
        }
      });
    }
  },
  components: {
    comment
  }
};
</script>


<style lang="less">
.newsinfo-container {
  padding: 10px;
  p {
    margin-bottom: 0 10px;
  }
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
    font-weight: 600;
  }
  .subtitle {
    width: 100%;
    padding: 0 5px;
    overflow: hidden;
    .ctime,
    .click {
      font-size: 13px;
      color: #226aff;
    }
  }
  .content {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
