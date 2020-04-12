import {ADD_TO_CART} from '../actions/actionType';
const shopingCartReducers = (cart = [] , action) =>{
    switch (action.type) {
            case ADD_TO_CART: 
            return [ ...cart , {product: action.product }]
        default: return cart;
    }
}
export default shopingCartReducers;
