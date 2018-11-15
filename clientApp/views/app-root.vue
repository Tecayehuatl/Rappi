<template>
     <main class="o-main">
        <div class="o-banner">
            <!--image credits-->
            <a style="background-color:black;color:white;text-decoration:none;padding:4px 6px;font-family:-apple-system, BlinkMacSystemFont, &quot;San Francisco&quot;, &quot;Helvetica Neue&quot;, Helvetica, Ubuntu, Roboto, Noto, &quot;Segoe UI&quot;, Arial, sans-serif;font-size:12px;font-weight:bold;line-height:1.2;display:inline-block;border-radius:3px" href="https://unsplash.com/@kxvn_lx?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer" title="Download free do whatever you want high-resolution photos from kevin laminto"><span style="display:inline-block;padding:2px 3px"><svg xmlns="http://www.w3.org/2000/svg" style="height:12px;width:auto;position:relative;vertical-align:middle;top:-1px;fill:white" viewBox="0 0 32 32"><title>unsplash-logo</title><path d="M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"></path></svg></span><span style="display:inline-block;padding:2px 3px">kevin laminto</span></a>
            <!--/image credits-->
            <h1 class="o-banner__title">Baratón Store</h1>
        </div>
        <aside class="o-menu">
            <ul class="c-menu-list">
                <!-- <li class="c-menu-list__item" v-for="category in categories" :key="category.id">
                    {{category.name}} 
                    <ul class="c-sub-menu-list">
                        <li class="c-sub-menu-list__item">vino tinto</li>
                        <li class="c-sub-menu-list__item">vino rojo</li>
                    </ul>
                </li> -->
            </ul>
        </aside>
        <article class="o-main__container">
            <h2 class="o-main__title">
                Productos
            </h2>
            <ul class="c-products">
                <buy-item v-for="item in products" :key="item.id" v-bind:item="item"></buy-item>
            </ul>
        </article>        
    </main>
</template>
<script>
import productsList from 'assets/json/products'
import categories from 'assets/json/categories'
import item from 'components/item'

export default {
    data(){
        return {
            products: productsList.products,
            categories: categories.categories
        }
    },
    components: {
        "buy-item": item,
    },
    methods: {
        orderCatergories(categories){
            let categoriesList = []
            let categoriesListLevel2 = []
            let categoriesListLevel3 = []

            categories.map(function(object, index){
                console.log(object.name)

                //console.log(object.sublevels)
                // while(object.sublevels.length >= 1){
                //     console.log(object.name)
                // }
                //condicional de que si tiene mas de un item y es subivels entra

                //orderCatergories
                //console.log(object.sublevels.length)
                // if(object.sublevels.length >= 1){
                //     console.log(`SUBLEVEL DETECTED in ${index}`)
                // }
            })
        },
        createNewSubCategory(subCategoriesArray){
            let newCategories = []
            subCategoriesArray.map()
        }
    },
    mounted(){
        this.orderCatergories(this.categories)
        
    }
}
</script>
