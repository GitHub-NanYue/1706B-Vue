<template>
  <div class="Login">
    <van-nav-bar title="圈子登陆" left-text="返回" left-arrow>
        <van-icon name="search" slot="right" />
    </van-nav-bar>
    <el-input class="userName" placeholder="用户名" v-model="input" clearable></el-input>
    <el-input class="passWord" placeholder="密码" v-model="passWord" show-password></el-input>
    <div class="LoginBtn" @click="LoginBtn()">登陆</div>
    <span class="registerSize"><router-link to="/Register">没有账号，快速注册</router-link></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      passWord:''
    }
  },
  methods:{
      LoginBtn(){
          console.log("121231")
      }
  }
}
</script>
<style lang="scss">
*{
    padding: 0;
    margin: 0;
}
.el-input {
    position: relative;
    font-size: 14px;
    width: 100%;
}
    .Login{
        width: 100%;
        height: 100%;
        .userName{
            width:355px;
            height: 45px;
            margin-left: 10px;
        }
        .passWord{
            width:355px;
            height: 45px;
            margin-left: 10px;
            margin-bottom: 30px;
        }
    }
    .LoginBtn{
        width: 355px;
        height: 45px;
        background: #F76968;
        font-size: 16px;
        text-align: center;
        line-height: 45px;
        color: white;
        margin-left: 10px;
    }
    .registerSize{
        font-size: 16px;
        text-decoration:underline;
        margin-left: 10px;
    }
</style>
