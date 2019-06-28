<template>
    <div id="header">
        <div class="left">
            <img src="../assets/cnodejs_light.svg" alt="">
            <!-- <input type="text" name="" id="" placeholder="🔍"> -->
        </div>
        <div class="right">
            <ul>
                <li><router-link to=''>首页</router-link></li>
                <li><router-link to='' v-if="login_success">未读消息</router-link></li>
                <li><router-link to=''>新手入门</router-link></li>
                <li><router-link to=''>API</router-link></li>
                <li><router-link to=''>关于</router-link></li>
               
                <li><router-link to='' v-if="login_success">设置</router-link></li>
                <li><a v-if="login_success" @click="all()">退出</a></li>
                <li><router-link to='/lagin'  v-if="!login_success">注册</router-link></li>
                <li><router-link to='/login'  v-if="!login_success">登陆</router-link></li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            login_success:false
        }
    },
    mounted(){
        if(localStorage.username){
            console.log("dfs")
            this.login_success = !this.login_success
        }
    },
    methods:{
        all(){
            alert('hah')
           console.log( localStorage.clear())  
           if(this.login_success==true){
               this.login_success=!this.login_success
           }
        }
    }
}

</script>

<style>
    #header{
        width: 100%;
        height: 50px;
        background: #444444;
        display: flex;
        justify-content: space-between;
        padding:0 6%;
      
        
    }
    #header .left{
        width: 200px;
    }
    #header .left img{
        width: 130px;
        margin: 10px;
    }
     #header .left input{
         width: 170px;
         height: 25px;
         border-radius: 10px;
         
     }
     #header .right{
         color: black;
         font-size: 13px;

     }
     #header .right ul{
         /* width: 560px; */
         list-style: none;
         display: flex;
       
     }

    #header ul li{
        padding: 0 16px;
        height: 50px;
        line-height: 50px;
        text-align: center;

    }
    #header a{
        text-decoration: none;
        color: white;
    }
</style>
