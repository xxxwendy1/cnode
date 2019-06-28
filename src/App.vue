<template>
  <div id="app">
    <div class="c">
       <router-view/>
    </div>

   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
background: #DEE1E6;
}
#app{
  width: 100%;
  
  
}

.c{
  display: flex;
  flex-wrap:wrap;

}
</style>
