import { FETCH_PRODUCT, FETCH_SUCCESS,FETCH_FAIL } from '../actions/actionType';
import {fetchProductAction,fetchSuccessAction,fetchFailAction} from '../actions/index';
import axios from "axios";
import {put, takeEvery} from 'redux-saga/effects';
// import {Api} from './Api';
function* getProductFromApi() {
    const res = yield axios({
      method: "GET",
      url: "http://bakeryapi.devfast.net/product"
    });
    const data =  res.status===200 ? res.data.data : [];
    return data;
  }
function* fetchProduct(){
    try {
        const response = yield getProductFromApi();
        return  yield  put({type: FETCH_SUCCESS , receiveProducts : response })
    } catch (error) {
       return   yield   put({type: FETCH_FAIL ,  error})
    }
}
export function* watchFetchProduct(){
    yield takeEvery(FETCH_PRODUCT,fetchProduct);
}

