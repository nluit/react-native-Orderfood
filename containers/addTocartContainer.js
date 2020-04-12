import ListProduct from '../components/Product/Listproduct';
import {addToCart} from '../actions';
import {connect} from 'react-redux';
const mapDispatchToProps = (dispatch)=>{
    return {
        onclickAdd : (product) =>{
            dispatch(addToCart(product))
        }
    }
}
export default connect(null,mapDispatchToProps)(ListProduct) ;   