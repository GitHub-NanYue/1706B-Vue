<template>
    <div>
        <div>
            <van-search placeholder="请输入搜索关键词" v-model="value" />
        </div>
        <div class="Routers">
          <router-link to="/Main/Home/Attention">关注</router-link>
          <router-link to="/Main/Home/Recommend">推荐</router-link>
          <router-link to="/Main/Home/Hot">热榜</router-link>
            <!-- <van-tabs v-model="active">
                <van-tab title="关注" to="/Main/Home/Attention"><div><router-view></router-view></div></van-tab>
                <van-tab title="推荐" to="/Main/Home/Recommend"><div><router-view></router-view></div></van-tab>
                <van-tab title="热榜" to="/Main/Home/Hot"><div><router-view></router-view></div></van-tab>
            </van-tabs> -->
        </div>
        <div>
          <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  data(){
    return{
      value:""
    }
  }
}
</script>
<style lang="scss" scoped>
  .Routers{
         height: 45px;
         display: flex;
         justify-content: space-around;
         align-items: center;
         border-bottom: 1px solid #000;
         a{
          height: 100%;
          width: 33.3%;
          text-align: center;
          line-height: 45px;
      }
  }
</style>
