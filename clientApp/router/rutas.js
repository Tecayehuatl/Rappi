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
        path: '/views/item', 
        component: item 
    }
]

export default routes