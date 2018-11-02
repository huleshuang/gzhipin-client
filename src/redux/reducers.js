/*
  reducers函数 ：根据previous state 和 action 产生一个新的状态newState
              （ previous state  表示先前的行为（旧的状态），action表示操作状态的行为 ）

              最终向外暴露： {xxx: xxx(), yyy: yyy()}
              包含n个根据老的state和action返回新的state的函数的模块
 */

import {combineReducers} from 'redux';

import {AUTH_SUCCESS,ERROR_MSG} from './action-typs';

import getRedirectPath from '../utils/index'

//初始化数据里面的初始化数据 来源于action.data ===(分为user和msg)
const initUser = {
  username: '', // 用户名
  type: '', // 类型
  msg: '', // 错误提示信息

  redirectTo: '' // 需要自动跳转的路由path
}


function user (preState = initUser,action){
  switch (action.type) {

    case AUTH_SUCCESS: //认证成功的状态 则跳转到主页面 main，显示内容
      // return {...action.data,redirectTo:'/'}
      return {username:action.data.username,type:action.data.type,msg:'',redirectTo:getRedirectPath(action.data.type,action.data.header)}

    case ERROR_MSG: //请求出错 ，错误信息提示

      // 在node中和浏览器端默认对象是不能使用... ，但是react脚手架项目，babel帮我让对象能够使用...
      //...preState 将之前的状态 展开，哪个在后面 哪一个生效 ，会覆盖第一个参数，
      return {msg:action.data}

      // return {...action.data}

    default :
       return preState;
  }
}

//如何暴露, 合并多个reducers函数，可以通过
export default combineReducers({
  user
})

