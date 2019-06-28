<template>
    <div id="user">
         <div class="con1">
             <p>作者</p>
             <div class="con_title">
                <router-link :to="'/center/'+arr.data.loginname">
                    <img :src="arr.data.avatar_url" alt="">
                </router-link> 
                
                <div> {{arr.data.loginname}}</div>
             </div>
              <div class="aa">{{arr.data.score}}积分</div>
              <div class="aa">注册时间：{{arr.data.create_at}}</div>
        </div>
        <div class="con2">
            <h4>最近参加的话题</h4>
            <p  v-for="(user,index) in arr.data.recent_replies" :key="index" class="title">
                <span><img src="user.author.avatar_url" alt="" id="imgTitle"></span>
                
                <span class="joinTitle">{{user.title}}</span>
            </p>
        </div>
        <div class="con3">
            <h4>最近创建的话题</h4>
            <p v-for="(iem,index) in arr.data.recent_topics" :key="index"  class="title">
                <span class="joinTitle">{{iem.title}}</span>
            </p>
        </div> 
         
    </div>
</template>

<script>
export default {
    props:['name'],
    data(){
        return {
            arr:[]
        }
    },
    created(){
        this.getdata()
        // console.log(this.name)
    },
    methods:{
          getdata(){
              
            this.axios.get(`https://cnodejs.org/api/v1/user/`+this.name).then((res)=>{
                this.arr = res.data
                // console.log(this.arr)
                
            })
         
        }
    }
}
</script>

<style>


#user .con1{
    width: 300px;
    background: white;
    
    
}
#user .con1 .con_title{
    display: flex;
    line-height: 60px;
}
#user .con1>p{
    background: #F6F6F6;
    padding: 7px 7px;
    margin:0 ;
}
 #user .con1 div img{
    width: 50px;
    height: 50px;
    display: block;
    margin: 10px;
}
#user .con1 .aa{
    height: 20px;
    padding-left: 10px;
    font-size: 14px;
}
.con1>p{
    width: 100%;
    margin-left: 10px;
}
.con2,.con3{
    width: 300px;
    font-size: 14px;
    background: white;
    margin-top: 10px;
    /* border:1px solid red; */
}
.con2 .title{
    
    height: 30px;
    display: flex;
    border-bottom: 1px solid slategrey;
    overflow: hidden;

}
.joinTitle{
   line-height: 30px;
  
}
#imgTitle{
    width: 30px;
    height: 30px;
    margin: 10px;
}
h4{
    font-size: 18px;
    padding: 10px 10px; 
} 
/* .con3{
    padding:0px 10px;
    width: 100%;
    font-size: 14px; */
    /* background: gainsboro; */
    /* margin-top: 20px; 
 
} */
.con3>p,.con2>p{
   padding-left:10px ;
} 
</style>