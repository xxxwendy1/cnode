<template>
    <div class="center">
        <div class="con1">
            <p class="center_top" >
                <router-link to='/'>主页</router-link> <span  style="color:#D1CCCC">/</span>
            </p>
              <img :src="arr.avatar_url" alt="">
              <div> {{arr.loginname}}</div><br>
              <p>{{arr.score}}积分</p>
              <p>注册时间：{{arr.create_at}}</p>
        </div>
        <div class="cont2">
            <h4>最近参加的话题</h4>
            
            <p  v-for="(user,index) in arr.recent_replies" :key="index" class="title">
                <span><img :src="user.author.avatar_url" alt="" id="imgTitle"></span>
                <span class="joinTitle">{{user.title}}</span>
            </p>
        </div>
        <div class="cont3">
            <h4>最近创建的话题</h4>
            <p v-for="(iem,index) in arr.recent_topics" :key="index" >
                <span class="joinTitle">{{iem.title}}</span>
            </p>
        </div>
     
    </div>
</template>
<script>


export default {
   
    name:"center",
    data(){
        return {
            arr:[],
            // obj:''
        }
    },
    created(){
        console.log("哈哈")
        this.getdata
    },

    computed:{
        getdata(){
            let center=this.$route.params.name
            console.log(center)
            // this.obj=alsotang
            this.axios.get(`https://cnodejs.org/api/v1/user/`+center).then((res)=>{
                 let {data}= res.data
                this.arr = data
                console.log(this.arr)
                
            })
            
        }
    }
}
</script>
<style>
.center{
    width: 80%;
    margin: 0 auto;
    /* background: grey; */
}
.center .con1{
    display: flex;
    flex-wrap: wrap;
    background: white;

}

.center .con1 img{
    width: 50px;
    height: 50px;
    display: block;
    margin: 10px;
}
.center .con1>div{
    height: 50px;
    line-height: 50px;
    margin: 10px 0;
}

.cont2{
    width: 100%;
    font-size: 14px;
    background: white;
    margin-top: 20px;
}
.cont2 .title{
    height: 50px;
    display: flex;
    border-bottom: 1px solid slategrey;
    overflow: hidden;
    
}
.joinTitle{
   line-height: 50px;
   padding-right: 10px;
  
}
#imgTitle{
    width: 30px;
    height: 30px;
    margin: 10px;
}
h4{
    font-size: 18px;
    padding: 10px 10px;
    background: #F6F6F6;
}
.cont3{
    /* padding:0px 10px; */
    width: 100%;
    font-size: 14px;
    background: gainsboro;
    margin-top: 20px; 
 
}
.cont3>p{
   padding-left:10px;
   background: white; 
}
 .center .con1 .center_top{
    width: 100%;
    height: 40px;
    background: #F6F6F6;
    padding: 7px;
    border-bottom: 1px solid #D1CCCC;
    margin: 0px;
}
 .center .con1 p{
    width: 100%;
    padding-left: 10px;   
 }
</style>


