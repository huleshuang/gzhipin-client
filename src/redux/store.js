
/*
  结合 state,reducers,action
 */

import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; // redux异步中间件
import reducers from './reducers';

//开发时候用到的调试工具
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
