import Login from '../components/Login/login';
import {connect} from 'react-redux';
import {postLoginAction , postLoginSuccess,postLoginFail } from '../actions';
const mapStateToProps = (state)=>{
    return {
        users :  !state.loginReducers ? [] : state.loginReducers
    }

}
const mapDispatchToProps = (dispatch) =>{
    return {
        onPostLogin: (loginInfo)=>{
          return  dispatch(postLoginAction(loginInfo));    
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);