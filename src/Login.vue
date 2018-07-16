<template>
  <div>
    <input type="text" placeholder="用户名" v-model="username">
    <input type="password" placeholder="密码" v-model="password">
    <button type="button" @click="login">登录</button>
  </div>
</template>

<script>
    export default{
        data(){
            return {
              username:'',
              password:'',
            }
        },
        methods:{
          login(){
            this.$store.dispatch('loginByUsername',username.password).then(response=>{

            }).catch()
          }
        }
    }
</script>

<style>
</style>
