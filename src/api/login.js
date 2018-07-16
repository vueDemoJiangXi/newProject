/**
 * Created by Lenovo on 2018/7/15.
 */
import request from '@/utils/request.js'


export function login(username,password){
  const data={
    username:username,
    password:password,
    f:login
  }
  return request({
    method:'post',
    url:'a',
    data
  })
}
