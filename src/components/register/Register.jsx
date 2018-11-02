import React,{Component} from 'react';

import {NavBar,List,InputItem,Radio,WhiteSpace,Button} from 'antd-mobile';
import Logo from '../logo/logo';

//ajax请求
// import {reqRegister} from '../../api/index';
import PropTypes from 'prop-types';

import {Redirect} from 'react-router-dom'

const Item = List.Item;

class Register extends Component{

  static propTypes={
    user: PropTypes.object.isRequired,
    register:PropTypes.func.isRequired
  }

  //初始化注册表单的数据
  state={
    username:'',
    password:'',
    rePassword:'',
    type:'boss'
  }

  //每一个的onclick事件
  // setUsername=(val)=>{
  //   this.setState({
  //     username:val
  //   })
  // }

  //动态收集表单的数据
  handleFormData=(name,val)=>{
    //更新数据
    this.setState({
      [name]:val
    })
  }

  //注册按钮事件:发送请求
  registe= async ()=>{
    //获取到状态数据
    const {username,password,rePassword,type} = this.state;
    // console.log(username+'----'+password+'======'+rePassword+'===='+type)
    // //发送ajax请求
    // if(password === rePassword){
    //   const data = await reqRegister({username,password,type});
    //   console.log(data);
    //
    // }else{
    //   alert('两次密码不一致')
    // }

    this.props.register({username,password,rePassword,type})

  }

  //已有账户 那么则跳转到登录界面
  toLogin=()=>{
    //this.props.history.push('/login'); //push表示 跳转到某一页面，但是还可以回退
    this.props.history.replace('/login'); //replace 表示 跳转到某一页面，但是不可以回退
  }

  render(){
    //获取到当前 type里的 type
    const {type} =this.state;

    const {msg,redirectTo} = this.props.user;

    if(redirectTo){

      //路由爱妮佳
      // this.props.history.replace(redirectTo);

      return <Redirect to={redirectTo}/>
    }

    return (
     <div>
       <NavBar>硅谷直聘</NavBar>
       <Logo />

       {msg ? <p className="error-msg">{msg}</p>:''}

       {/*---------form表单开始---------*/}
       <form>
         <List>
           <WhiteSpace />
         <InputItem placeholder="请输入您的用户名" type="text" onChange={val=>this.handleFormData('username',val)}>
           用户名
         </InputItem>
           <WhiteSpace />
         <InputItem placeholder="请输入您的密码" type="password" onChange={val=>this.handleFormData('password',val)}>
           密码
         </InputItem>
           <WhiteSpace />
         <InputItem placeholder="请确认您的密码" type="password" onChange={val=>this.handleFormData('rePassword',val)}>
           确认密码
         </InputItem>
           <WhiteSpace />
         <Item>
           用户类型 &nbsp;&nbsp;
           <Radio className="my-radio" checked={type === 'dashen'}  onClick={() => this.handleFormData('type', 'dashen')}>大神</Radio>
           &nbsp;&nbsp;&nbsp;&nbsp;
           <Radio className="my-radio" checked={type === 'boss'} onClick={() => this.handleFormData('type', 'boss')}>老板</Radio>
         </Item>
         <Item>
           <Button type="primary" onClick={this.registe}>注册</Button>
           <Button onClick={this.toLogin}>已有账户</Button>
         </Item>
         </List>
       </form>
     </div>
    )
  }
}

export default Register;