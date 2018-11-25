<template>
    <div class="goodscomment-container">
        <comments :id="$route.params.id"></comments>
    </div>
</template>

<script>
import comments from "../../components/comment";

export default {
  components: {
    comments
  }
};
</script>


<style lang="less">
.goodscomment-container {
    padding: 5px 10px;;
}
</style>
