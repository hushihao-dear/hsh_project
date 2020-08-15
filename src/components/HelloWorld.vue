<template>
  <div class ="container">
    <div class ="one"></div>
  </div>
</template>

<script>
import Menu from '@/components/menu'
export default {
  name: 'HelloWorld',
  components: {
    Menu
  },
  data () {
    return {
    }
  }
}
</script>


<style scoped>
.container{
  
  
}
.one{
  width:100px;
  height:100px;
  background: blue;
}
</style>
