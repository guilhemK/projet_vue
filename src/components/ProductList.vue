<template>
    <ul id="ul-lines-products">
        <li class="line-product" v-for="(product, index) in products" :key="product.id">
            <div class="delete-line-product" v-on:click="deleteLine(index)">X</div>
            <ul class="ul-line-product">
                <li class="line-product-skin">
                    Produit :<br /><span class="basket-product">{{ product.name }}</span>
                </li>
                <li class="line-product-price">
                    Prix :<br /><span class="basket-product">{{ product.price }}</span><span class="basket-product">€</span>
                </li>
                <li class="line-product-quantity">
                    <label for="quantity-input-1">Quantité :</label>
                    <br />
                    <div class="quantity-container">
                        <div class="input-symbol"
                            v-on:click="product.quantity--">-</div>
                        <input v-model=product.quantity name="quantity-input" id="quantity-input-1" class="quantity" type="number"
                                min="0"/>
                        <div class="input-symbol"
                        v-on:click="product.quantity++">+</div>
                    </div>
                </li>
                <li class="line-product-total">
                    Total :<br /><span class="basket-product total">{{ calculTotalLine(product) }}</span><span
                        class="basket-product">€</span>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script>
export default({
    name: 'product-list',
    props: [
        'products',
    ],
    data() {
        return {
            totalBasket: 0,
        }
    },
    watch: {
        quantity: function (val) {
            console.log(val);
        },
    },
    computed: {
        totalLines: function() {
            let totalBasket = 0;
            this.products.forEach(product => {
                totalBasket += product.total;
            });

            this.$emit('totalLinesChanged', totalBasket);

            return totalBasket;
        }
    },
    methods: {
        calculTotalLine: function (product) {
            product.total = product.quantity * product.price;
            return product.total;
        },
        deleteLine: function (index) {
            this.products.splice(index, 1);
        }
    }


})
</script>