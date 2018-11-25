<template>
    <mt-swipe class="binner-container" :auto="4000">
            <mt-swipe-item v-for="(item, index) in bannerList" :key="index">
                <a :href="item.url">
                    <img :src="item.img" :class="{'full' : isfull}">
                </a>
            </mt-swipe-item>
        </mt-swipe>
</template>

<script>
export default {
  props: ["bannerList","isfull"]
};
</script>


<style lang="less">
.binner-container {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: cyan;
    }
    &:nth-child(2) {
      background-color: lightgreen;
    }
    a {
      display: block;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
      }
    }
  }
}
.full {
    width: 100%;
}
</style>
