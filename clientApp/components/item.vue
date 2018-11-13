<template>
    <li class="c-products__item o-product-item">
        <!-- {{item.id}}<br />
        {{item.name}} -->
    </li>
</template>
<script>
export default {
    props: ['item'],
    data(){
        return{
            //productItem: this.products
        }
    },
    mounted(){
        //console.log(this.productItem)
    }
}
</script>

