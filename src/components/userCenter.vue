<template>
    <div class="userCenter" >
        <div v-if="ishow">
            请登录
        </div>
        <div v-else>
            <div class="user_cnt1">个人信息</div>
            <div class="user_cnt2">
                <router-link to="/userpage">
                    <img :src="username.avatar_url" alt="" class="user_img">
                    <span>{{username.loginname}}</span>
                </router-link>
            </div>
            <div class="user_cnt3">
                <img src="https://static.cnodejs.org/FvSQHGgGVh_tkomqIFQ0MDEH9wrg" alt="">
                <img src="https://static.cnodejs.org/Ft7Ekzy3Dd-_aDGcmoEgct5uTnVZ" alt="">
                <img src="https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_" alt="">
                <img src="https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS" alt="">
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
          ishow:true,
          username: ''
      }
      
  },
  mounted(){
      this.center();
  },
  methods:{
    center(){
        console.log('开始');
        if(localStorage.username){
            this.ishow = false;
            this.username = JSON.parse(localStorage.username)
            console.log(this.username)
        }else{
            console.log('222')
        }
    }
  }
}
</script>

<style>
.user_cnt1{
    height: 50px;
    background: #F6F6F6;
    line-height: 50px;
    padding-left: 10px;
}
.user_cnt2,.user_cnt3{
    /* border: 1px solid red; */
    background:white;
    width: 100%;
}
.user_cnt2>a{
    height: 50px;
    line-height: 50px;
    display:flex;
    color: black;
    text-decoration: none
}
.user_cnt2>div>span{
    display: inline-block;
    line-height: 50px;
}
.user_img{
    width: 50px;
    height: 50px;
    padding: 7px ;
}
.user_cnt3{
    margin-top: 17px;
}
.user_cnt3 img{
    width: 100%;
    margin-top: 5px
}
</style>
