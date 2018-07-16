<template>
  <div class="wrap">
    <Header></Header>
    <div class="body">

      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from './Header'
    export default{
        data(){
            return {}
        },
      components:{
        Header,
      }
    }
</script>

<style scoped>
  .wrap{
    display:flex;
    /*flex-wrap: nowrap;*/
    flex-direction: column;
    justify-content: flex-start;
    /*align-items:flex-start;*/
  }
</style>
