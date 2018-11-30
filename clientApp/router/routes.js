import appRoot from 'views/app-root'
import detailedItem from 'views/detailed-item'

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
        path: '/views/detailed-item/:productId', 
        component: detailedItem ,
        props: true //this component will accept props as parameter
    }
]

export default routes