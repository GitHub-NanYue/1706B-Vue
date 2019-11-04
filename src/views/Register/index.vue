<template>
    <div class="Register">
        <van-nav-bar title="注册圈子" left-text="返回" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <el-input class="userName1" placeholder="用户名" v-model="userName" clearable></el-input>
        <el-input class="passWord1" placeholder="密码" v-model="passWord" show-password></el-input>
        <div class="RegisterBtn" @click="Register">注册</div>

    </div>
</template>
<script>
import {register} from '../../service/index'
export default {
    data() {
    return {
      userName: '',
      passWord:''
    }
  },
  methods:{
      async Register(){
          let {userName,passWord} = this
          let result = await register({userName,passWord});
          console.log('Register',result)
          if(result && result.data === 0){
              alert(result.data.msg)
          }else{
              window.history.back();
          }
      }
  }
}
</script>
<style lang="scss">
html,body{
    width: 100%;
    height: 100%;
}
*{
    padding: 0;
    margin: 0;
}
.el-input {
    position: relative;
    font-size: 14px;
    width: 100%;
}
    .Register{
        width: 100%;
        height: 100%;
        .userName1{
            width:355px;
            height: 45px;
            margin-left: 10px;
        }
        .passWord1{
            width:355px;
            height: 45px;
            margin-left: 10px;
        }
    }
    .RegisterBtn{
        width: 355px;
        height: 45px;
        background: #F76968;
        font-size: 16px;
        text-align: center;
        line-height: 45px;
        color: white;
        margin-left: 10px;
    }
</style>
