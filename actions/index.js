import {ADD_TO_CART , FETCH_PRODUCT,FETCH_SUCCESS,FETCH_FAIL, POST_LOGIN, POST_SUCCESS , POST_FAIL } from './actionType';
export const addToCart = (product) => {
    return {
        type:ADD_TO_CART, 
        product: product,        
    }
}

export const fetchProductAction = () => {
    return {
        type : FETCH_PRODUCT,
    }
}

export const fetchSuccessAction = (receiveProducts)=>{
    return {
        type : FETCH_SUCCESS,
        receiveProducts,
    }
}

export const fetchFailAction = (errors)=>{
    return {
        type : FETCH_FAIL,
        errors
    }
}
export const postLoginAction = (loginInfo) =>{
    return {
        type:POST_LOGIN,
        loginInfo
    }
}
export const postLoginSuccess = (receiveuser) =>{
    return {
        type:POST_SUCCESS,
        receiveuser
    }
}
export const postLoginFail = (error) =>{
    return {
        type:POST_FAIL,
        error
    }
}