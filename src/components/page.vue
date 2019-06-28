<template>
    <div>
        <div v-for="(item,index) in arr" :key="index" >{{item}}</div>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size='page'
            :current-page.sync='newpage'
            :total="pages.length">
        </el-pagination>

    </div>
</template>

<script>
export default {
     props:['pages'],
    data(){
        return { 
            list:[],
            page:10,
            newpage:1
            
        }
    },
    created(){
        this.getdata()
    },
    methods:{
        getdata(){
            let arr=[]
           arr= this.pages.slice(this.page*this.newpage-this.page,this.page*this.newpage)
           console.log(this.list=arr)
        
        }
    },
    watch:{
        newpage(newpage,oldpage){
            console.log(newpage)
            this.getdata() 
            console.log(this.pages)
        }
        
    }

}
</script>

<style>

</style>
