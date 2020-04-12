import {connect} from 'react-redux';
import Product from '../components/Product/Product';
import {fetchProductAction,fetchSuccessAction,fetchFailAction} from '../actions/index';
const mapStateToProps = (state )=>{
    return {
        dataProducts :  state.productReducers
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onFetchProduct: ()=>{
            dispatch(fetchProductAction());
            // console.log(1);
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Product) ; 
