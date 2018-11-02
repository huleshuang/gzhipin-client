import React from 'react';
import ReactDOM from 'react-dom';

//引入路由组件
import {HashRouter,Switch,Route} from 'react-router-dom';
import Login from './containers/login';
import Register from './containers/register';
import Main from './components/main/main';


//引入redux
import store from './redux/store';
import {Provider} from 'react-redux'

import './assets/css/index.less'


ReactDOM.render((
  // 设置路由的链接地址
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>

        <Route component={Main}/>
      </Switch>
    </HashRouter>
  </Provider>

), document.getElementById('root'));

