<template>
  <div class="comment-container">
    <h2>发表评论</h2>
    <textarea placeholder="请输入您要评论的内容!最多输入120字" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
    <div class="comment-list">
      <div class="comment-item" v-for="(item, index) in commentList" :key="index">
        <div class="comment-title">第{{index + 1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time |
          dateFormat}}</div>
        <div class="comment-content">
          {{item.content || '此用户很懒，嘛都没说'}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  props: ["id"],
  data() {
    return {
      pageIndex: 1,
      commentList: [],
      msg: ""
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          //   console.log(result.body)
          if (result.body.status === 0) {
            // this.commentList = result.body.message;
            this.commentList = this.commentList.concat(result.body.message);
          } else {
            Toast("获取评论信息失败!请重试!");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    postComment() {
      if (this.msg.trim().length === 0) {
        return Toast("评论内容不能为空!");
      }
      // this.$http
      //   .post("api/postcomment/" + this.$route.params.id, {
      //     content: this.msg.trim()
      //   })
      //   .then(result => {
      //     // console.log(result);
      //     if (result.body.status === 0) {
      //       this.pageIndex = 1;
      //       this.commentList = [];
      //       this.getComments();
      //       this.msg = "";
      //     } else {
      //       Toast("发表评论失败!请重试!");
      //     }
      //   });
      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status === 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };
            this.commentList.unshift(cmt);
            this.msg = "";
          }
        });
    }
  }
};
</script>

<style lang="less">
.comment-container {
  padding-bottom: 10px;
  h2 {
    margin-bottom: 10px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
    padding-top: 5px;
    padding-left: 10px;
  }
  .comment-list {
    margin: 5px 0;
    .comment-item {
      font-size: 13px;
      .comment-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .comment-content {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>