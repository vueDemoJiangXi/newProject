/**
 * Created by Lenovo on 2018/7/15.
 */
import {login} from '@/api/login'

var user={
  state:{
    token:''
  },
  mutations:{
    setToken:(state,token)=>{
      state.token=token
  ``}
  },
  actions:{
      loginByUsername({commit},username,password){
        const uname=username.trim();
        return new Promise((resolve,reject)=>{
          login(uname,password).then(response=>{
            commit('setToken',response.data.data.token)
            resolve()
          }).catch(error=>{
            reject(ettor)
      })
      })
    }
  }
}
export default user


