import { POST_FAIL, POST_SUCCESS,POST_LOGIN  } from '../actions/actionType';
import axios from "axios";
import {put , takeLatest , takeEvery} from 'redux-saga/effects';
// import {Api} from './Api';
function* postloginFromApi(loginInfo) {  
    const res = yield axios({
      method: 'POST',
      url : `http://bakeryapi.devfast.net/login`,
      data : loginInfo
    } )
    const data =  res.status === 200 ? res: [];
    return data;
  }
function* fetchLogin(action){
    try {
        const response = yield postloginFromApi(action.loginInfo);
          yield  put({type: POST_SUCCESS , receiveuser : response });
    } catch (error) { 
          yield  put({type: POST_FAIL ,  error })
    }
}
export function* watchPostLogin(){
    yield takeEvery(POST_LOGIN,fetchLogin );  
}

