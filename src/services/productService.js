import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("https://dummyjson.com/products")
    }

    getByProductsId(productId){
        return axios.get("https://dummyjson.com/products/"+productId)
    }
}