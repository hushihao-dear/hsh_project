<template>
<div class ="containers" v-if ="showHome">
  <div class = "dotblock">
    <div class="dot dot1"></div>
    <div class="dot dot2"></div>
    <div class="dot dot3"></div>
    <div class="dot dot4"></div>
    <div class="dot dot5"></div>
  </div>
  
</div>
</template>

<script>

export default {
  name: 'home',
  components: {
   
  },
  data () {
    return {
      showHome:true,
    }
  },
  created(){
    setTimeout(()=>{
      this.showHome=false;
      this.$router.replace({path:'/menu'});
    },2000)
  }
}
</script>


<style scoped>
.containers{  
  height:100vh;
  background-color: rgb(39, 30, 92);
    
}

.dotblock{   
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height:70px;
  /* border:2px solid #ffffff; */

}
.dot{
  width:50px;
  height:50px;
  border-radius: 25px;
  margin-right:30px;
  display: inline-block;
}
.dot1{
  background-color: aqua;
  
   animation: dot1 1.5s  linear infinite normal ;
}
.dot2{
  background-color: rgba(0,191,255,1);
  animation: dot2 1.5s 0.2s linear infinite normal ;
}
.dot3{
  background-color: rgba(30,144,255,1);
  animation: dot3 1.5s 0.4s linear infinite normal ;

}
.dot4{
  background-color: rgba(0,0,205,1);
  animation: dot4 1.5s 0.6s linear infinite normal ;
}
.dot5{
  /* margin-right:-100px; */
  background-color: rgba(0,0,139,1);
  animation: dot5 1.5s 0.8s linear infinite normal ;
}
@keyframes dot1 {
  0%{
   box-shadow: 0 0 2px 4px rgba(126,249,255,1); 

  }
  25%{
  box-shadow: 0 0 2px 10px rgba(126,249,255,.8); 
  }
   50%{
   box-shadow: 0 0 2px 18px rgba(126,249,255,.6); 
  }
   75%{
   box-shadow: 0 0 2px 24px rgba(126,249,255,.3); 
  }
   100%{
  box-shadow: 0 0 2px 30px rgba(126,249,255,0); 
  }
}
@keyframes dot2 {
  0%{
   box-shadow: 0 0 2px 4px rgba(135,206,250,1); 

  }
  25%{
  box-shadow: 0 0 2px 10px rgba(135,206,250,.8); 
  }
   50%{
   box-shadow: 0 0 2px 18px rgba(135,206,250,.6); 
  }
   75%{
   box-shadow: 0 0 2px 24px rgba(135,206,250,.3); 
  }
   100%{
  box-shadow: 0 0 2px 30px rgba(135,206,250,0); 
  }
}
@keyframes dot4 {
  0%{
   box-shadow: 0 0 2px 4px rgba(47, 88, 209,1); 

  }
  25%{
  box-shadow: 0 0 2px 10px rgba(47, 88, 209,.8); 
  }
   50%{
   box-shadow: 0 0 2px 18px rgba(47, 88, 209,.6); 
  }
   75%{
   box-shadow: 0 0 2px 24px rgba(47, 88, 209, 0.3); 
  }
   100%{
  box-shadow: 0 0 2px 30px rgba(47, 88, 209,0); 
  }
}
@keyframes dot3 {
  0%{
   box-shadow: 0 0 2px 4px rgba(100,149,237,1); 

  }
  25%{
  box-shadow: 0 0 2px 10px rgba(100,149,237,.8); 
  }
   50%{
   box-shadow: 0 0 2px 18px rgba(100,149,237,.6); 
  }
   75%{
   box-shadow: 0 0 2px 24px rgba(100,149,237,.3); 
  }
   100%{
  box-shadow: 0 0 2px 30px rgba(100,149,237,0); 
  }
}
@keyframes dot5 {
  0%{
   box-shadow: 0 0 2px 4px rgba(0,0,205,1); 

  }
  25%{
  box-shadow: 0 0 2px 10px rgba(0,0,205, 0.8); 
  }
   50%{
   box-shadow: 0 0 2px 18px rgba(0,0,205,.6); 
  }
   75%{
   box-shadow: 0 0 2px 24px rgba(0,0,205,.3); 
  }
   100%{
  box-shadow: 0 0 2px 30px rgba(0,0,205,0); 
  }
}
</style>
