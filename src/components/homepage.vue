<template>
    <div class="poso">

    <div id="homepage">
        <div class="homePage_top" > 
           <ul> 
                <li>
                    <router-link to="/?tab=all">全部</router-link>
                </li>
                <li>
                    <router-link to="/?tab=good">精华</router-link>
                </li>
                <li>
                    <router-link to="/?tab=share">分享</router-link>
                </li>
                <li>
                    <router-link to="/?tab=ask">问答</router-link>
                </li>
                <li> 
                    <router-link to="/?tab=job">招聘</router-link>
                </li>
                <li>
                    <router-link to="/?tab=dev">客户端测试</router-link>
                </li>
           </ul>  
            
        </div>
        <div class="homepage_bum">

            <div v-for="(item) in (dbdata,list)" :key="item.id" class="homepage_bum_lint">
                <img :src="item.author.avatar_url" alt="">
                <div class="sit">{{item.reply_count}}/{{item.visit_count}}</div>
                <span class="top" v-show="item.top">置顶</span>
                <span class="top" v-show="!item.top&&item.good">精华</span>
                <span class="top" v-show="!item.top&&!item.good&&item.tab=='share'">分享</span>
                <span class="top" v-show="!item.top&&!item.good&&!item.tab=='share'&&item.tab=='ask'">问答</span>
                <router-link id="title" :to="'/userInfo/'+item.id" >{{item.title}}</router-link>
            </div>
              <el-pagination
                background
                layout="prev, pager, next"
                :page-size='page'
                :current-page.sync='newpage'
                :total="tabal ? tabal : 10">
            </el-pagination>
        </div>
        <div>
            <!-- <div v-for="(item,index) in list" :key="index" >{{item}}</div> -->
          
            <!-- <Page :pages='arr'></Page> -->
        </div>
    </div>
    <div id="Center">
       <UserCenter></UserCenter>
    </div>
<!-- 
    span 判断
    query params 区别？
 -->
  </div>
</template>

<script>
import UserCenter from './userCenter'
// import Page from './Page'
export default {
    data(){
        return {
            arr: [],
            //分页
            list:[],
            page:10,
            newpage:1,
            tabal:''
        }
    },
    mounted(){//当html创建完成加载
        console.log("开始")
            this.getdate()
            //分ye
        
            // this.getdata( )
    },
    computed:{
        dbdata(){//主题跳转
            console.log("获取")
            let tab=''
            tab =this.$route.query.tab
            this.axios.get('https://cnodejs.org/api/v1/topics/?tab='+tab).then((res)=>{
                let { data } = res.data
                this.arr = data
                this.tabal = this.arr.length;
                this.getdata()
            })
        },
    },
    methods:{
        getdate(){
            this.axios.get('https://cnodejs.org/api/v1/topics').then(res =>{
                let { data }  = res.data
                this.arr = data
                this.tabal = this.arr.length;
               this.getdata()
            })
            
        },
        getdata(){//分页
            // let arr=[]
            this.list= this.arr.slice(this.page*this.newpage-this.page,this.page*this.newpage)
        // console.log(this.list)
        }
    },
    components:{
       UserCenter ,
    //    Page

    },
    watch:{
        newpage(newpage,oldpage){
            console.log(newpage)
            this.getdata() 
            console.log(this.list)
        }
        
    }

    // methods:{
    //     getdata(str){ 
    //         console.log(str)//点击时的值
    //         if(str == undefined){ 
    //             str = 'all'
    //         }
    //          this.axios.get('https://cnodejs.org/api/v1/topics/?tab='+str)
    //          .then((res)=>{
    //             console.log("数据")   
    //            this.arr = res.data.data
    //             console.log(this.arr)
    //         })
    //     },     
    // }
}
</script>

<style>
.poso{
    display: flex;
    padding: 0 6%;
}
/* 个人中心 */
#Center{
    width: 20%;
    margin:10px  20px
}
#homepage{
    width: 76%;
    padding-top: 10px;
}
#homepage .homePage_top{
    height: 50px;
    background: #F6F6F6;

}
.homePage_top ul{
    list-style: none;
    height: 50px;
    display: flex;
    font-size: 14px;
    height: 30px;
    align-items: center;
    padding-top: 15px;
    margin-left:20px; 
}
.homePage_top ul li{
    height: 25px;
    padding: 0px 5px;
    background:#80bd01;
    margin-right: 20px;
    border-radius: 10%;
    line-height: 20px;
    text-align: center;
    /* border: 1px solid red; */
}
.homePage_top a{
    text-decoration: none;
    color: white;   
 }  
.homepage_bum{
    background: white;
    
}
.homepage_bum .homepage_bum_lint{
    border-top: 1px solid gray;
    display: flex;
}
.homepage_bum .homepage_bum_lint img{
    width: 30px;
    height: 30px;
    margin: 0px;
    margin:10px; 
}
.homepage_bum .homepage_bum_lint .top
{
    height: 20px;
    /* padding: 1px 5px; */
    width: 50px;
    margin: 0 2px 0 4px;
    background:#80bd01;
    margin-top: 15px;
    border-radius: 10%;
    line-height: 20px;
    text-align: center;
}
.homepage_bum .homepage_bum_lint .sit{

    font-size: 14px;
    color:gray;
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0 10px;
}
.homepage_bum .homepage_bum_lint:hover{
    background: #F6F6F6;
}
#title{
    width: 700px;
    line-height: 50px;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    color: black;
    text-decoration: none;
}
</style>
