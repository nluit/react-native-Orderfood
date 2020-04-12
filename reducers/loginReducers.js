import { POST_LOGIN, POST_SUCCESS , POST_FAIL } from '../actions/actionType';
const loginReducer = (user = [] , action) => {
    switch (action.type) {
        case POST_SUCCESS:
            return action.receiveuser;
        case POST_FAIL:
            return [];     
        default:
            return user ;
    }
}
export default loginReducer;