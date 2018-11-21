<template>
  <div class="app-container">

	<!-- 头部 -->
    <mt-header fixed title="VUE - CMS"></mt-header>

	<!-- 底部 -->
	<nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" to="/home">
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to="/member">
			<span class="mui-icon mui-icon-contact"></span>
			
			<span class="mui-tab-label">会员</span>
		</router-link>
		<router-link class="mui-tab-item" to="/shopcar">
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				<span class="mui-badge">0</span>
			</span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link class="mui-tab-item" to="/search">
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>

	<!-- 内容区域 -->
	<transition>
		<router-view></router-view>
	</transition>
	
  </div>
</template>

<script>
</script>

<style lang="less">
.app-container {
  padding: 40px 0 50px 0;
  overflow-x: hidden;

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
	transform: translateX(-100%);
	position: absolute;
  }

  .v-enter-active,
  .v-leave-active {
	  transition: all .6s ease;
  }
}
</style>