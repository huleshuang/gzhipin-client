
/*
  action creators 创建多个工厂函数
  同步操作 生成返回一个action 对象
  异步操作 生成返回一个action 函数
 */

import {AUTH_SUCCESS,ERROR_MSG} from './action-typs';

import {reqLogin,reqRegister} from '../api/index';

/**
 * 同步操作 生成返回一个action 对象
 * @param msg
 * @returns {{type: string, data: *}}
 */
//同步错误消息
const errMsg = (msg)=>({type:ERROR_MSG,data:msg});
//同步成功的消息
const authSuccess = (user)=>({type:AUTH_SUCCESS,data:user});


/**
 * 异步注册，生成返回一个action 函数
 * @param username
 * @param password
 * @param rePassword
 * @param type
 */
export function register({username,password,rePassword,type}){

  // 进行前台表单验证, 如果不合法返回一个同步action对象, 显示提示信息
  if(!username || !password ||!rePassword ||!type){
    return errMsg('用户名或者密码不合法');
  }

  if(rePassword !== password){
    return errMsg('两次密码不一致');
  }

  //生成返回一个action 函数，必须有dispatch,返回的是一个promise对象
  return async dispatch=>{
      console.log(username,password,rePassword,type);

      //异步的ajax请求注册功能，得到响应的数据 response.data
      const response = await reqRegister({username,password,type});
      const result = response.data;

      if(result.code === 0){
        //那么分发action成功,返回成功的响应数据
        dispatch(authSuccess(result.data));
      }else{
        //那么分发action失败，打印错误的信息提示
        dispatch(errMsg(result.msg));
      }


  }

}

/**
 * 异步登录 生成返回一个action 函数
 * @param username
 * @param password
 */
export const login = ({username,password}) => {

  if(!username || !password){
    return errMsg('用户名或者密码错误')
  }

  return async dispatch =>{

    //异步的ajax请求登录功能，得到响应的数据 response.data
    const response = await reqLogin({username,password});
    const result = response.data;

    if(result.code === 0){
      dispatch(authSuccess(result.data));
    }else{
      dispatch(errMsg(result.msg));
    }

  }

}