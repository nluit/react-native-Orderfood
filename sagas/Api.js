import Listdata from "../components/Product/data";

function* getProductFromApi(){
    const urlProduct ='https://jsonplaceholder.typicode.com/posts';
    const respone = yield fetch(urlProduct,{
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json'

        },
        body:'',
    })
    // if(respone.status===200) 
    // const products= yield respone.status === 200 ? JSON.parse(respone):[];
    // let product = JSON.parse(respone.data);
    return 'respone';
}
export const Api = {
    getProductFromApi

}
