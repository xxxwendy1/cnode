<template>
    <div id="login">
        <div v-for="item in (data,list)" :key="item.id"></div>
        <el-form  label-width="330px"  id="formLogin">
            <h2 style="text-align:center; padding:20px 0;">注册</h2>
            <el-form-item label="账户">
                <el-input type="text"  style="width: 300px" v-model="named" ></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input type="password"   style="width: 300px" v-model="passworld1"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" >
                <el-input type="password"   style="width: 300px" v-model="passworld2"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain @click="data()">提交</el-button>
                <span v-if="isWord">注册成功！即将跳转到登录页面</span>
            </el-form-item>
            <el-form-item>
                 <div class="Log">已有账号 直接<router-link to='/login'>登陆</router-link ></div>       
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            named:"",
            passworld1:"",
            passworld2:"",
            isWord:false,
            id:0

        }
    },
//    45
    mounthed(){
        
    },
   
    computed:{
        data(){}    
          
        },
        lagin(){//注册
      
        

       
      },
      methods:{
        err(){
            if(passworld1.value === ''){
                callback(elert('内容为空请输入'));
            }
        }
      }
    
}
</script>2

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
