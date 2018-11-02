
import React,{Component} from 'react'
import {Grid,List} from 'antd-mobile';
import ProtoTypes from 'prop-types'

class HeaderSelector extends Component{
  static propTypes={
    setHeader:ProtoTypes.func.isRequired
  }

  //初始化一个图片数据
  state={
    icon:null
  }

  /**
   * 当前组件点击获取每一个头像的事件
   * @param obj
   */
                    //{icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAA…PSZY1aOVzDe7PZ4H/CjAA1BMEvOMNWfcAAAAASUVORK5CYII=", text: "头像9"}
  setHeader=(obj)=>{ //obj相当于 grid里的data数据{icon,text}
    console.log(obj);

    //更新自身组件的状态
    this.setState({
      icon:obj.icon
    })

    /**
     * 从而间接的更新父级组件的setHeader，那么表单就获取到头像的文本text，从而存进数据库
     * @returns {*}
     */
    this.props.setHeader(obj.text);

  }

  render(){
    //获取数据状态 更新图片的显示
    const {icon} = this.state;
    const headerUI = icon ? <div>请选择头像：<img src={icon} alt="我是header"/></div> :'请选择头像'

    const data = Array.from(new Array(20)).map((item, index) => ({
      icon: require(`./avatars/头像${index+1}.png`),
      text: `头像${index+1}`,
    }));

    return(
      <List renderHeader={() => headerUI}>
        <Grid data={data} columnNum={5} onClick={this.setHeader}/>
      </List>
    )
  }
}

export default HeaderSelector;