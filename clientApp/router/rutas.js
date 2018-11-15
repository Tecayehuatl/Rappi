import appRoot from 'views/app-root'
import item from 'views/item'

let routes = [
    /*{ 
        path: '*', 
        redirect: '/'
    },*/
    { 
        path: '/', 
        component: appRoot 
    },
    { 
        name: 'viewProductDetail',
        path: '/views/item/:productId', 
        component: item ,
        props: true //this component will accept props as parameter
    }
]

export default routes