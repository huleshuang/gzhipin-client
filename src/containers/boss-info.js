import {connect} from 'react-redux';

//老板信息的组件
import BossInfo from '../components/boss-info/index';

//引入action里的更新用户的方法
import {updateUser} from '../redux/actions'

export default connect(
  state=>({user:state.user}),
  {updateUser}
)(BossInfo)