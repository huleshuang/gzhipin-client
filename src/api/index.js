
/*
  调用axios参数请求调用
 */
//引入ajax的模块

import ajax from './ajax';

/**
 * 登录
 * @param data
 * @returns {*}
 */
export const reqLogin = data => ajax('/login',data,'POST');

/**
 * 注册
 * @param data
 * @returns {*}
 */
export const reqRegister = data => ajax('/register',data,'POST');

/**
 * 更新用户信息
 */
export const updateUserInfo = data => ajax('/update', data , 'POST')
