import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import DashenInfo from '../dashen-info';
import BossInfo from '../boss-info'

class Main extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route path="/bossInfo" component={BossInfo}/>
          <Route path="/dahsneInfo" component={DashenInfo}/>
        </Switch>
      </div>
    )
  }
}

export default Main;