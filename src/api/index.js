
/*
  调用axios参数请求调用
 */
//引入ajax的模块

import ajax from './ajax';

export const reqLogin = data => ajax('/login',data,'POST');
export const reqRegister = data => ajax('/register',data,'POST');
