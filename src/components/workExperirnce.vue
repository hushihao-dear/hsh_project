<template>
<div class ="leftbox">
    <div class = "workExpperience"> ---- 工作经历</div>
     <div class = "experienceBox" >
        <div class = "experi firstExper" :class = "{'showLeftTranslate':showNext}">
            <p>工作时间：2018.11.01 -- 至今</p>
            <p>工作单位：中兴软件技术（南昌）有限公司</p>
            <p>工作岗位：web前端工程师</p>
            <p>工作内容：</p>
            <ul>
                <li>负责项目功能开发与任务分配</li>
                <li>参与项目需求评审，配合后台人员完成接口文档的制定</li>
                <li>完成项目功能测试与优化</li>
                <li>参与后台接口编写，完成接口联调工作</li>
               
            </ul>
            
        </div>
        <div class = "experi secondExper" :class = "{'showRightTranslate':showNext}">
            <p>工作时间：2018.03.01 -- 2018.09.30</p>
            <p>工作单位：厦门瑞为信息技术有限公司</p>
            <p>工作岗位：实习</p>
            <p>工作内容：</p>
            <ul>
                <li>负责项目功能开发与任务分配</li>
                <li>参与项目需求评审，配合后台人员完成接口文档的制定</li>
                <li>完成项目功能测试与优化</li>
                <li>参与后台接口编写，完成接口联调工作</li>
               
            </ul>
        </div>
     </div>
</div>
   
</template>

<script>
export default {

  data () {
    return {
     
    }
  },
  props:{
      showNext:{
          type:Boolean,
          default:false
      }
  }
}
</script>

<style scoped>
.workExpperience{
    height:20vh;
    line-height: 20vh;    
    font-size:62px;
    font-family: KaiTi;
    color:transparent;
    font-weight: 900;
  	background: url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg); 
    background-size: cover;
    -webkit-background-clip: text;
    /* border:1px solid red; */
}
.experi::before{
  content:"";
  display: block;
  width:48px;
  height:48px;
  background-image: url(../../img/information.png)
}
.experienceBox{
    display: flex;
    justify-content:space-between;
    /* border:1px solid green; */

}
.experi{
    display: inline-block;
    width:40vw;
    height:75vh;
    border:2px solid rgba(128,128,128,.5);
    padding:8px;
    border-radius: 8px;
    /* margin-left:20px; */
}
.firstExper{
    transform:translateX(-100%);
}
.secondExper{
     transform:translateX(100%);
}
ul li{
    margin-bottom:15px;
}
.showLeftTranslate{
    animation: leftTranslate 1.5s linear forwards;
}
@keyframes leftTranslate {
    from {transform:translateX(-100%);}
    to {transform:translateX(0);}
    
}
.showRightTranslate{
    animation: rightTranslate 1.5s linear forwards;
}
@keyframes rightTranslate {
    from {transform:translateX(100%);}
    to {transform:translateX(0);}
    
}
</style>
