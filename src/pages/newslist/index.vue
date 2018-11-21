<template>
  <div class="newslist-container">
    <ul class="mui-table-view">
        <li v-for="item in newsList" :key="item.id" class="mui-table-view-cell mui-media">
            <router-link :to="'/home/newsinfo/' + item.id">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <h4 class="title mui-ellipsis">{{ item.title }}</h4>
                    <p>
                        <span class="ctime mui-pull-left">发表时间: {{ item.add_time | dateFormat('YY-MM-DD HH:mm:ss') }}</span>
                        <span class="click mui-pull-right">点击: {{ item.click }}</span>
                    </p>
                </div>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        // console.log(result.body)
        if (result.body.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("新闻列表数据获取失败！请重试！");
        }
      });
    }
  }
};
</script>

<style lang="less">
.newslist-container {
  .mui-table-view {
    .mui-table-view-cell > a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    .mui-media-body {
      width: 100%;
      .title {
        font-size: 15px;
        font-weight: 700;
      }
      > p {
          width: 100%;
          padding-top: 10px;
      }
      .ctime,
      .click {
          font-size: 13px;
          color: #26a2ff;
      }
    }
  }
}
</style>
