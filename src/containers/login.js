
/*
  定义登陆的容器组件
 */

import {connect} from 'react-redux';

//路由组件
import Login from '../components/login/Login';

import {login} from '../redux/actions'

export default connect(
  state=>({user:state.user}),
  {login}
)(Login)