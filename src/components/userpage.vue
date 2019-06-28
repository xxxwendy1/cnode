<template>
<div class="poso">
    <div class="userpage">
        <!-- 个人主页 -->
        <div class="userpage_top" >
            <router-link to='/'>主页</router-link> <span  style="color:#D1CCCC">/</span>
        </div>
        <div class="userpage_btm">
            <router-link to="/userpage">
                <img :src="smg.data.avatar_url" alt="" class="userpage_img">
                <span>{{smg.data.loginname}}</span>
            </router-link>
            <div>{{smg.data.score}}积分</div>
            <div><router-link :to="'/shoucang/'+smg.data.loginname">4个话题收藏</router-link></div>
            <div>@{{smg.data.githubUsername}}</div>
            <div>注册时间{{smg.data.create_at}}</div>
        </div>
         <div class="userpage_topic" >
           最近创建的话题
        </div>
        <div class="userpage_btm">
            <div id="topic">无话题</div>

        </div>
        <div class="userpage_topic" >
           最近参与的话题
        </div>
        <div class="userpage_btm">
             <div v-for="(item) in (smg.data.recent_replies)" :key="item.id" class="userpage_bum_lint">
                 <div><img :src="item.author.avatar_url" alt=""></div>
                <!-- <div class="sit">{{item.reply_count}}/{{item.visit_count}}</div> -->
                <router-link id="title" to="" >{{item.title}}</router-link>
            </div>
            
        </div>
    </div>
    <div id="Center1">
       <UserCenter></UserCenter>
    </div>
</div>
</template>

<script>
import UserCenter from './userCenter'
export default {
    data(){
        return {
            name:'',
            smg:'',

        }
    },
    created(){
        this.check()
    },
    methods:{
        check(){
            console.log('wendy')
            this.name=JSON.parse(localStorage.username)//转对象
            // console.log(this.name.loginname)
            this.axios({
                            
                url:"https://cnodejs.org/api/v1/user/"+this.name.loginname,
                methods:'get',
               
            })
            .then(res => {
                this.smg=res.data
                console.log(this.smg.data.recent_replies)
            })
        }
        
    },
    components:{
        UserCenter,
    }

}
</script>

<style>
.poso{
    display: flex;
    padding: 10px 6%;
}
.userpage{
    width: 76%;
    /* border: 1px solid red; */
}
.userpage .userpage_top,.userpage_topic{
    height: 40px;
    background: #F6F6F6;
    padding: 7px;
    border-bottom: 1px solid #D1CCCC;
   
}
.userpage_topic{
     margin-top: 15px;
}
.userpage .userpage_top a{
    color: #80bd01;
    text-decoration: none;

}
#Center1{
    width: 20%;
    margin:0  20px;
}
.userpage_btm{
    /* border: 1px solid red; */
    background:white;
    width: 100%;
    padding: 10px;
}
.userpage_btm>a,.userpage_bum_lint a{
    height: 50px;
    line-height: 50px;
    display:flex;
    color: black;
    text-decoration: none;

}
.userpage_btm>#topic{
    height: 30px;
    color: #778087;
    font-size: 14px;
    line-height: 30px;
    
}

.userpage_img{
    width: 50px;
    height: 50px;
    padding: 7px ;
}
.userpage_topic>div{
    padding: 0 10px;
}
.userpage_bum_lint{
    height: 50px;
    border-bottom: 1px solid gray;
    display: flex;
    align-items: center;
    line-height: 50px;
}
.userpage_bum_lint div img,.userpage_bum_lint div{
    width: 30px;
    height: 30px;
}
.userpage_bum_lint a{
    margin-left: 10PX;
}
</style>
