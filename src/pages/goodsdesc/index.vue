<template>
    <div class="gooddesc-container">
        <h3>{{ info.title }}</h3>
        <hr>
        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    this.getDoodsdesc();
  },
  methods: {
    getDoodsdesc() {
      this.$http
        .get("api/goods/getdesc/" + this.$route.params.id)
        .then(result => {
          if (result.body.status === 0) {
            this.info = result.body.message[0];
            // console.log(this.info);
          }
        });
    }
  }
};
</script>

<style lang="less">
.gooddesc-container {
  padding: 10px;
  h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
