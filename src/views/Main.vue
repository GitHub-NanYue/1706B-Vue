<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <div>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="coupon" to="/Main/Home">首页</van-tabbar-item>
                <van-tabbar-item icon="browsing-history" to="/Main/Edu">想法</van-tabbar-item>
                <van-tabbar-item icon="medel" to="/Main/Idea">大学</van-tabbar-item>
                <van-tabbar-item icon="chat" to="/Main/Message">信息</van-tabbar-item>
                <van-tabbar-item icon="contact" to="/Main/My">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:0
        }
    }
}
</script>
