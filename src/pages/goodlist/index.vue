<template>
    <div class="goodlist-container">
        <!-- 商品列表 -->
        <!-- 方式一.a 标签形式实现 标签跳转 -->
        <!-- <router-link class="goods-item" v-for="item in goodsList" :key="item.id" 
        :to="'/home/goodsinfo/' + item.id" tag="div">
            <img :src="item.img_url">
            <h1 class="title"> {{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{ item.stock_quantity}}件</span>
                </p>
            </div>
        </router-link> -->

        <!-- 方式二. 使用 window.location.href 的形式， 编程式导航 -->
        <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goToGoodsInfo(item.id)">
            <img :src="item.img_url">
            <h1 class="title"> {{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{ item.stock_quantity}}件</span>
                </p>
            </div>
        </div> 

        <!-- 加载更多 -->
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodsList: []
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    getGoodList() {
      // 获取商品列表
      this.$http
        .get("api/getgoods?pageindex=" + this.pageindex)
        .then(result => {
          // console.log(result.body);
          if (result.body.status === 0) {
            this.goodsList = this.goodsList.concat(result.body.message);
          }
        });
    },
    getMore() {
      this.pageindex++;
      this.getGoodList();
    },
    goToGoodsInfo(id) {
        this.$router.push("/home/goodsinfo/" + id)
    }
  }
};
</script>

<style lang="less">
.goodlist-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 5px 0 10px 0;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          font-weight: bold;
          color: red;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 15px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }
}
</style>
