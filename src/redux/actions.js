
/*
  action creators 创建多个工厂函数
  同步操作 生成返回一个action 对象
  异步操作 生成返回一个action 函数
 */

import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './action-typs';

import {reqLogin,reqRegister,updateUserInfo} from '../api/index';

/**
 * 同步操作 生成返回一个action 对象
 * @param msg
 * @returns {{type: string, data: *}}
 */
//同步错误消息
const errMsg = (msg)=>({type:ERROR_MSG,data:msg});
//同步成功的消息
const authSuccess = (user)=>({type:AUTH_SUCCESS,data:user});

//同步接收用户
const receiveUser = (user) => ({type:RECEIVE_USER,data:user});

//同步重置用户
const resetUser = (msg) => ({type: RESET_USER, data: msg});


/**
 * 异步注册，生成返回一个action 函数
 * @param username
 * @param password
 * @param rePassword
 * @param type
 */
export function register({username,password,rePassword,type}){

  // 进行前台表单验证, 如果不合法返回一个同步action对象, 显示提示信息
  if(!username){
    return errMsg('请输入用户名');
  }else if(!password){
    return errMsg('请输入密码');
  }else if(!rePassword){
    return errMsg('请输入确认密码');
  }else if(!type){
    return errMsg('请选择账号类型');
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
/**
 * 更新用户信息
 * @param user
 * @returns {Function}
 */

export const updateUser = (user) =>{
  //表单验证  同步方式
  const {header, post, company, salary, info} = user;
  if (!header) {
    return resetUser({msg: '请选择头像'});
  } else if (!post) {
    return resetUser({msg: '请输入招聘职位'});
  } else if (!company) {
    return resetUser({msg: '请输入公司名称'});
  } else if (!salary) {
    return resetUser({msg: '请输入薪资范围'});
  } else if (!info) {
    return resetUser({msg: '请输入公司简介'});
  }

  return async dispatch=> {
    const response = await updateUserInfo(user);
    const result = response.data;
    if (result.code === 0) {
      dispatch(receiveUser(result.data));
    } else {
      dispatch(resetUser(result.msg));
    }
  }

}