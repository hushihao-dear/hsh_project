<template>
  <div id="container" ref="appBox"> 
    <router-view></router-view>    
  </div>
</template>

<script>
import home from "./home"
export default {
  name: 'App',
  components:{
    home
  },
  data(){
    return{
      navList:[],
      curIndex:0,
  
    }

  },
  created(){
    
  },
  mounted(){
    //  var appBoxHeight = 
  },
  methods:{
  
  }
}
</script>

<style>
body,html{
margin:0px;

}


</style>
