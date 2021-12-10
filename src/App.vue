<template>
  <div id="app">
     <Header/>
     <router-view></router-view>
     <!-- 在登录注册时是隐藏的，在主页和搜索时是显示的 -->
     <Footer v-show="this.$route.meta.show"/>
     
    
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'

export default {
  name: 'App',
  components:{
    Header,Footer
  }
  
}
</script>

<style>

</style>
