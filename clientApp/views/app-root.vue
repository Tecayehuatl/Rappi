<template>
     <main class="o-main">
        <header-view></header-view>
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
                <summary-item v-for="item in products" :key="item.id" v-bind:item="item"></summary-item>
            </ul>
        </article>        
    </main>
</template>
<script>
import productsList from 'assets/json/products'
import categories from 'assets/json/categories'
import summaryItem from 'components/summary-item'
import headerView from 'views/header'

export default {
    data(){
        return {
            products: productsList.products,
            categories: categories.categories
        }
    },
    components: {
        "summary-item": summaryItem,
        "header-view": headerView
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
        //this.orderCatergories(this.categories)
    }
}
</script>
