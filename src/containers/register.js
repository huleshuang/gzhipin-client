/*
  定义容器组件
 */

import {connect} from 'react-redux';

//引入注册的的组件
import Register from '../components/register/Register';

//引入actions 的分发方法
import {register} from '../redux/actions';

// 将ui组件封装成容器组件
export default connect(
  state => ({user: state.user}), //状态数据
  {register}  //操作状态数据的方法
)(Register)

