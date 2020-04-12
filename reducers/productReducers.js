import {ADD_TO_CART , FETCH_PRODUCT,FETCH_SUCCESS , FETCH_FAIL } from '../actions/actionType';
const productReducers = (dataProducts = [] , action ) =>{
    switch (action.type) {
        case FETCH_SUCCESS:
            return action.receiveProducts;
        case FETCH_FAIL:
            return [];     
        default:
            return dataProducts ;
    }
}
export default productReducers;