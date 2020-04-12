import {call, all , fork  } from 'redux-saga/effects';
import {watchFetchProduct} from './productSaga';
import {watchPostLogin} from './loginSaga';
export  default function* rootSaga (){
  return yield all([fork(watchFetchProduct), fork(watchPostLogin)]);
}