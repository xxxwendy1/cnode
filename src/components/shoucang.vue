<template>
<div class="shou">
    
    <div id="shoucang">
        <!-- {{loginname}} -->
        <div class="userpage_top" >
            <router-link to='/'>主页</router-link> <span  style="color:#D1CCCC">/<span></span>收藏的话题</span>
        </div>
         <div class="userpage_btm">
             <div v-for="(item,index) in list" :key="index" class="userpage_bum_lint">
                 <div><img :src="item.author.avatar_url" alt=""></div>
                <div class="site">{{item.reply_count}}/{{item.visit_count}}</div>
                <router-link id="tit" :to="'/userInfo/'+item.id" >{{item.title}}</router-link>
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
            list:[]
        }
    },
    created(){
        this.getdata()
    },
    methods:{
        getdata(){afd
            let dd=JSON.parse(localStorage.username).loginname
            this.axios.get('https://cnodejs.org/api/v1/topic_collect/'+dd)
            .then(res => {
                console.log(this.list=res.data.data)
            })
        }
    },
     components:{
        UserCenter
    }
}
</script>

<style>
.shou{
    display: flex;
    padding: 10px 6%;
}
#shoucang{
    width: 76%;
}
#shoucang .userpage_top,.userpage_topic{
    height: 40px;
    background: #F6F6F6;
    padding: 7px;
    border-bottom: 1px solid #D1CCCC;
   
}
#shoucang .userpage_topic{
     margin-top: 15px;
}
#shoucang .userpage_top a{
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
#shoucang .userpage_btm>a,.userpage_bum_lint a{
    height: 50px;
    line-height: 50px;
    display:flex;
    color: black;
    text-decoration: none;

}
#shoucang .userpage_btm>#topic{
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
.userpage_bum_lint div img{
    width: 30px;
    height: 30px;
}
#tit{
    margin-left: 30px;
}
.site{
    font-size: 12px;
    width: 50px;
    margin-left: 10px;
}
</style>
