<template>
<div class ="box">
    <div class = "skillcontainer">
        <div class = "workSkills"> 个人技能</div>
        <div class = "skillBox"></div>
    </div>
    <div class = "evaluationContainer">

    </div>
</div>
   
</template>

<script>
export default {

  data () {
    return {
     
    }
  }
}
</script>

<style scoped>
.box{
    position: relative;
    margin-top:30px;
    /* border:2px solid red; */
    /* display: flex;
    justify-content:flex-start; */
}
.workSkills{   
    color:black;
    font-size:32px;
    font-family: KaiTi;
    height:10vh;
    /* line-height: 20vh;  */
    
}

.skillcontainer{
    /* position: absolute; */
    width:100%;
    height:30vh;
    border:1px solid #000000;
    /* clip-path: polygon(0% 0%,100% 0%,0% 100%);
    background-color: aqua; */
}
.evaluationContainer{
    /* position: absolute; */
    width:100%;
     height:70vh;
    /* clip-path: polygon(100% 100%,100% 0%,0% 100%); */
    background-color: blue;

}
</style>
