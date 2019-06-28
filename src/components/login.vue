<template>
    <div id="login">
        <div v-for="item in (list)" :key="item.id"></div>
        <el-form  label-width="330px"  id="formLogin">
            <h2 style="text-align:center; padding:20px 0;">登陆</h2>
            <el-form-item label="账户">
                <span v-if="uer">| 此账户不存在 请注册</span>
                <el-input type="text"  style="width: 300px" v-model="name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="log()">提交</el-button>

            </el-form-item>
            <el-form-item>
                 <div class="Log">没有账号？ 先<router-link to='/lagin'>注册</router-link >吧~</div>       
            </el-form-item>
        </el-form>
    </div>

</template>

<script>


export default {
    data(){
        return {
            list:[],
            name:"",
            uer:false,
            passwordIsRight:false
        }
    },
//     5e6ef717-7052-44d3-950e-8b085648b495
   
    methods:{
        log(){
          
            console.log('湖区哦');
            console.log(this.name)
            if(this.name== ''){//非空判断
                alert('accesstoken不能为空')
            }
            this.axios({
                url:'https://cnodejs.org/api/v1/accesstoken',
                method:"post",
                data:{
                    accesstoken:this.name
                } 
            })
           .then(res=>{
                console.log(res)
                // 将 accesstoken 和对应用户信息存入 localStorage
                if(res.request.status===200){ 
                    this.$router.push({path:'/'})
                    localStorage.accessToken = this.name;
                    localStorage.username = JSON.stringify(res.data)

                }
            })
           
            
        }
    }
}
//登陆成功后跳转首页

</script>

<style>
#formLogin{
    width: 60%;
    /* border:1px solid black; */
    margin: 0 auto;
}
.Log{
   color: grey;
}
</style>
