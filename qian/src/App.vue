<template>
 <div>
   <Header/>
   <div style="display: flex">
     <Aside/>
     <Home/><div style="flex:1"/>

     <router-view style="flex:1"/>

   </div>


 </div>
</template>
<style>

</style>
<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
import Home from  "@/components/Home.vue"

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:"Layout",
  components:{
    Header,
    Aside,
    Home
  }
}
</script>