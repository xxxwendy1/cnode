<template>
  <div class="hello">
    <Header></Header>
    <Homepage></Homepage>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './header'
import Homepage from './homepage'
import Footer from './Footer'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    Header,
    Homepage,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  background: #E1E1E1;
  
}
</style>
