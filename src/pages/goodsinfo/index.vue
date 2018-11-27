<template>
  <div class="goodsinfo-container">
    <!-- 小球 -->
    <transition 
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 轮播图部分 -->
    <div class="card">
      <div class="swiper">
        <swiper :bannerList="lunbotu" :isfull="false"></swiper>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="card">
      <div class="buy">
        <div class="title"> {{ goodsinfo.title }} </div>
        <div class="content">
          <p class="price">
            市场价: <del>￥{{ goodsinfo.market_price }}</del> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            销售价：<span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <div class="shopping">
            <p>购买数量:</p>
            <button class="sub" value="">-</button>
            <input class="count" type="text" value="1">
            <button class="add" value="">+</button>
          </div>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time | dateFormat }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../../components/swiper";

export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      goodsinfo: {},
      ballFlag: false
    };
  },
  created() {
    this.getLunbotu();
    this.getGoodsInfo();
  },
  methods: {
    getLunbotu() {
      // 获取轮播图
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          // 循环轮播图数组的每一项，为item添加img属性
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotu = result.body.message;
        }
      });
    },
    getGoodsInfo() {
      // 获取商品信息
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
          // console.log(this.goodsinfo);
        }
      });
    },
    goDesc(id) {
      // 跳转到商品描述页
      this.$router.push({
        name: "goodsdesc",
        params: {
          id
        }
      });
    },
    goComment(id) {
      // 跳转到商品评论页
      this.$router.push({
        name: "goodscomment",
        params: {
          id
        }
      });
    },
    // 添加购物车小球
    addToShopCar() {
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      // 获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取徽标在页面的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 1s ease";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang="less">
.goodsinfo-container {
  background-color: #eee;
  overflow-x: hidden;

  .card {
    background-color: #fff;
    margin: 10px;
    box-shadow: 2px 2px 8px #ccc;
    border-radius: 2px;

    .swiper {
      padding: 15px;
    }

    .buy {
      .title {
        padding: 10px 15px;
        border-bottom: 1px solid #ccc;
        font-size: 16px;
      }

      .content {
        padding: 15px;
        font-size: 14px;

        .now_price {
          font-size: 16px;
          font-weight: bold;
          color: red;
        }

        .shopping {
          overflow: hidden;
          height: 33px;
          line-height: 33px;
          color: #8f8f94;
          margin-bottom: 10px;

          p {
            float: left;
            margin-right: 10px;
          }

          .sub,
          .add,
          .count {
            float: left;
            width: 40px;
            height: 33px;
          }

          .count {
            border-left: none;
            border-right: none;
          }
        }
      }
    }

    .mui-card-footer {
      display: block;

      button {
        margin: 15px 0;
      }
    }
  }

  .ball {
    z-index: 99;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: 408px;
    left: 148px;
  }
}
</style>
