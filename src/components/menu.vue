<template>
<div id ="page" ref="pageContainer" :style = "{'transform':'translateY('+pageTranslteY+'px)','transition':'transform 1s' }">   
  <div class="upper" >
      <div class ="proflie">         
            <div>胡世豪</div>
            <div>女</div>
            <div>13872475790</div>
            <div>1145724236@qq.com</div>
            <div>三峡大学</div>
            <div>大学本科</div>
      </div>
      <div class ="idea">求职意向：前端工程师</div>
      <div class ="goNext" @click="goNext()"></div>
  </div>
  <div class ="bottom" >  
     <work-experirnce :showNext="showNext"></work-experirnce>
     <work-skill></work-skill>
  </div>
</div>

</template>
<script>
import workExperirnce from "./workExperirnce.vue"
import workSkill from "./workSkill.vue"
export default {
    name:'HelloWorld',
    components:{
        workExperirnce,
        workSkill
    },
    data(){
        return{
           showback:false,
           pageTranslteY:0,
           showNext:false,
           sreenHeight:0
        }
    },
  
    created(){
         
   
    },
    mounted(){
        // this.showback=true;
        window.addEventListener('scroll', this.scrollEvent);
        this.sreenHeight =window.screen.availHeight;
    },
       
    methods:{
        goNext(){
           this.pageTranslteY=-625;
        //    this.showNext=true;
           
        }    ,
        scrollEvent(){
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>=2*this.sreenHeight){
                
            }else if(scrollTop>=(this.sreenHeight/2)){
                this.showNext = true;
            }
            console.log("hhh"+scrollTop)
            console.log("dddd"+this.sreenHeight)
        }
    }
}
</script>

<style scoped>
.page{
    position: relative;
    /* background-color: rgba(212,242,231,.8); */
}
.upper{
    position: relative;
    height:100vh;
    color:rgba(240,255,255,.8);
    font-weight: 600;
    font-size:22px;
    background-image:url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
  
}
.proflie{
    position: absolute;
    width:70%;
    height:30vh;
    border-radius: 30px;
    box-shadow: 0px 4px 8px 8px rgba(169,169,169,.5);
    left:0;
    right:0;
    top:0;
    bottom:0;   
    margin: auto;
    display: flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-between;
    padding:0 10px;
    
}
.idea{
    position: absolute;  
    top:100px;   
    font-size: 24px;
    letter-spacing: 2px;
    left:50%;
    transform: translateX(-50%);

}
.goNext{
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  bottom:5px;
  width:50px;
  height:50px;
  border-radius: 27px;
  border:1px solid rgba(105,105,105,1);
  background-image: url(../../img/arrowdown.png)

}
.bottom{
    margin:0 5vw;
}

</style>

