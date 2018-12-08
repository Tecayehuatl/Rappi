import productsList from 'assets/json/products'

function getProducts(cb){
    setTimeout(() => cb(productsList.products),2000)
}

export default {getProducts}