
import React,{Component} from 'react';
import {NavBar,InputItem,Button,TextareaItem} from 'antd-mobile'

import HeaderSelector from '../header-selector';

import PropTypes from "prop-types";

class BossInfo extends Component{

  static propTypes={
    user:PropTypes.object.isRequired,
    updateUser:PropTypes.func.isRequired
  }

  //初始化数据状态
  state={
    header:'',
    info:'',
    post:'',
    salary:'',
    company:''
  }

  //收集表单数据 更新状态
  handleFormData=(name,val)=>{
    this.setState({
      [name]:val
    })
  }

  //为了在表单里得到头像的数据
  //setHeader获取最新的头部事件，传给子组件，然后子组件调用这个方法 间接的更新boss组件的form表单,
  // 就是获取到每点击一个头像的文本text，从而存进数据库，
  setHeader=(header)=>{
    this.setState({
      header
    })
  }

  //保存的事件
  saveSub=()=>{
    this.props.updateUser(this.state);
  }

  render(){
    const {msg} = this.props.user;
    return (
      <div>
        <NavBar>老板完善信息</NavBar>
        <HeaderSelector setHeader={this.setHeader}/>
        {msg ? <p className="error-msg">{msg}</p> : ''}

        <InputItem onChange={val=>this.handleFormData('post',val)}>招聘职位:</InputItem>
        <InputItem onChange={val=>this.handleFormData('company',val)}>公司名称:</InputItem>
        <InputItem onChange={val=>this.handleFormData('salary',val)}>职位薪资:</InputItem>
        <TextareaItem onChange={val=>this.handleFormData('info',val)} title="职位要求" rows={3}/>
        <Button type="primary" onClick={this.saveSub}>保存</Button>
      </div>
    )
  }
}
export default BossInfo;