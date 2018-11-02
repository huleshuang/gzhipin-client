import React,{Component} from 'react';

import {NavBar,List,InputItem,Radio,WhiteSpace,Button} from 'antd-mobile';
import Logo from '../logo/logo';

import {reqLogin} from '../../api/index';
import PropTypes from "prop-types";

const Item = List.Item;

class Register extends Component{
  static propTypes={
    user: PropTypes.object.isRequired,
    login:PropTypes.func.isRequired
  }

  //初始化数据状态
  state={
    username:'',
    password:''
  }


  //动态获取登录数据
  handleLoginData=(name,val)=>{
    this.setState({
      [name]:val
    })
  }

  //单击login按钮事件
  onLogin = async ()=>{
    //获取状态数据
    const {username,password} = this.state;
    //发送ajax请求
    console.log(username+''+password);

    const data = await reqLogin({username,password});
    console.log(data);
  }

  //还没有账户按钮跳转到----注册页面
  toRegist=()=>{
    this.props.history.replace('/register');
  }


  render(){
    const {msg} = this.props.user;

    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo />
        {msg ? <p className="error-msg">{msg}</p> : ''}

        {/*---------form表单开始---------*/}
        <form>
          <List>
            <WhiteSpace />
            <InputItem placeholder="请输入您的用户名" type="password" onChange={val=>this.handleLoginData('username',val)}>
              用户名
            </InputItem>
            <WhiteSpace />
            <InputItem placeholder="请输入您的密码" type="password" onChange={val=>this.handleLoginData('password',val)}>
              密码
            </InputItem>
            <WhiteSpace />

            <Item>
              <Button type="primary" onClick={this.onLogin}>登录</Button>
              <Button onClick={this.toRegist}>还没有账户</Button>

            </Item>
          </List>
        </form>
      </div>
    )
  }
}

export default Register;