import {combineReducers} from 'redux';
import shopingCartReducers from './shopingCartReducers';
import productReducers from './productReducers';
import loginReducers from './loginReducers';
const allReducers = combineReducers({
    productReducers,shopingCartReducers, loginReducers ,
})
export default allReducers;