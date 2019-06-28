<template>
    <div id="userInfo">
    <div class="left">
         <div class="l"><!--详情 -->
           <div class="xiang">
                <div class="cnt1">
                    <div>
                        <span class="top" v-if="userInfo.top">置顶</span>
                        <span class="good" v-show="!userInfo.top&&userInfo.good">精华</span> 
                        <span class="wen" v-show="!userInfo.top&&!userInfo.good&&userInfo.tab=='ask'">问答</span>
                        <span class="fen" v-show="!userInfo.top&&!userInfo.good&&userInfo.tab=='share'">分享</span>
                    </div>
                    <h3 class="title">
                        {{userInfo.title}}
                    </h3>
                </div> 
                
                <p class="cnt2">
                    <span class="name">发布于*前</span>
                    <span class="name">作者{{userInfo.author.loginname}}</span>
                    <span class="name">浏览{{userInfo.visit_count}}次</span>
                    <span class="name">
                        来自于
                        <span class="boom">
                            <span class="wen" v-show="userInfo.tab=='ask'">问答</span>
                            
                            <span class="wen" v-show="userInfo.tab=='job'">招聘</span>
                            <span class="fen" v-show="userInfo.tab=='share'">分享</span>
                        </span> 
                         <span id="collect" v-if="ishow" style=" background: #DEE1E6;"  @click="delcang()"> 取消收藏</span>

                        <span id="collect" v-else  style=" background: #80bd01;color: white;" @click="cang()"> 收藏</span>
                       
                    </span> 
                </p>
                <hr>
                <div v-html="userInfo.content" class="last">
                    {{ userInfo.content }}
                </div>   
            </div> 
        </div>
        <!-- 留言 -->
        <div class="liu">
            <p >{{userInfo.replies.length}}回复</p>
            <div v-for="(item,index) in userInfo.replies" :key="index" id="liuyan">
                <ul>
                    <li>
                        <div id="img_v"><img :src="item.author.avatar_url" alt=""></div>
                        <div id="right_v">
                            <span>{{ item.author.loginname}}</span>
                            <span>{{index+1}}楼</span><br>
                            <span v-html="item.content"></span>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="r">
        <User :name='userInfo.author.loginname'></User>
    </div>
    </div> 
</template>

<script>
import Header from './header'
import User from './user'
export default {
    data(){
        return { 
            userInfo:[],
            collected:false,
            name:'',
            cc:'',
            cal:[],
            ishow:false
            }
    },
    components:{
        Header,
        User
    },
    mounted(){
   
           let id=this.$route.params.id
            this.axios.get('https://cnodejs.org/api/v1/topic/'+id).then( (res) => {
                // console.log(res.data.data)
               this.userInfo =res.data.data
            //    console.log(this.userInfo) 
            
            })
      this.add()
       
    },
    methods:{
            //判断数据是否收藏  
            //
        cang(){
           
            if(localStorage.accessToken != null){
                let collect={'topic_id':this.$route.params.id,'accesstoken':localStorage.accessToken}
                this.axios.post('https://cnodejs.org/api/v1/topic_collect/collect',collect).then((res)=>{
                    console.log(res)
                    this.add()
                })  
            }
        },
        delcang(){
                let collect1={'topic_id':this.$route.params.id,'accesstoken':localStorage.accessToken}
                this.axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect',collect1).then((res)=>{
                    console.log(res)
                    this.add()
                })
           
        },
        add(){
    
            let dd=JSON.parse(localStorage.username).loginname
            this.axios.get('https://cnodejs.org/api/v1/topic_collect/'+dd)
            .then(res => {
                // console.log(res.data.data)
                this.ishow =   res.data.data.some(el =>  el.id == this.$route.params.id);
                console.log(this.ishow+"小涛涛")
                //如果ishow是true（已经收藏）显示取消收藏
                //如果ishow是false（没有收藏）显示收藏
                
            })
        }
    }
    
}
</script>

<style>
/* //收藏 */
#collect{
    position: absolute;
    display: inline-block;
    top: -20px;
    right: 80px;
    padding: 7px 16px;
    border:1px solid gray;
    border-radius: 5px;
   

}
#userInfo{
  width: 100%;
  background: #E1E1E1;
  height: 1400px;
  display: flex;
  padding: 2% 5%;
}
.l{
    width: 97%;
    background: white;
    /* border: 1px solid black; */
    padding: 15px 10px;
}

.cnt1{
  width: 100%;
  display: flex;
} 
.cnt1 div .top{
  width: 30px;
  display: inline-block;
  background:#80bd01;
  border-radius: 10%;
  text-align: center;
  color: ghostwhite;
  font-size: 14px;
  padding: 2px 3px;

}

.cnt2{
  font-size: 14px;
  color: gray;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 13px;
  color: gray;
  position: relative;
  
}
.cnt2 .name{
  display: inline-block;
  padding: 0 3px;
}
.last{
  padding:10px 10px;
  color: #746758;
}
a{
    color: #746758;
}
#cnt{display: none;}
.liu{
    float: left;
    background: white;
    /* border: 1px solid black; */
    margin-top: 16px;
    width: 97%;
}
.liu>p {
    background:#F6F6F6;
    padding: 10px; 
}
#liuyan{
    padding: 10px 10px;
    border-bottom: 1px solid gray;
}
#liuyan ul{
    width: 100%;
    list-style: none;
}
#liuyan ul li{
    width: 100%;
    display: flex;   
}
#liuyan ul li #img_v img{
   width: 40px;
   height: 40px;
}
#liuyan ul li #right_v{
    padding-left: 10px;
}
.left{
    width: 80%;
    /* border: 1px solid saddlebrown */
}

</style>
