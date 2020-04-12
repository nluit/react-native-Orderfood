import {connect} from 'react-redux';
import searchProduct from'../components/Product/searchProduct';
const mapStateToProps = (state)=>{
    return {
        cart : !state.shopingCartReducers ? [] : state.shopingCartReducers
    }
}
const searchProductContainer = connect(mapStateToProps)(searchProduct);
export default searchProductContainer;