<template>
    <div id="basket">
        <div class="main-basket-container">
            <section class="product-to-pay" id="app">
                <div class="title-product-to-pay">
                    <h2>Panier</h2>
                </div>

                <product-list :products="products" @totalLinesChanged="totalBasket = $event"></product-list>
                
                <div class="title-total-basket-container">
                    <h5 class="title-total-basket">Total du panier : <span id="total-basket">{{ totalBasket }}</span> <span>€</span></h5>
                </div>
                <div class="buy-product-to-pay">
                    <button class="button-buy">Acheter</button>
                </div>
            </section>
            <form-basket :products="products" :totalBasket="totalBasket"></form-basket>
        </div>
    </div>
</template>

<script>
import ProductList from "./ProductList.vue"
import FormBasket from "./FormBasket.vue"

export default({
    name: 'BasketContent',
    components: { ProductList, FormBasket },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "Aatrox lune de sang Edition Prestige",
                    price: 20,
                    quantity: 1,
                    total: 0
                },
                {
                    id: 2,
                    name: "Aatrox lune de sang",
                    price: 10,
                    quantity: 1,
                    total: 0
                },
                {
                    id: 3,
                    name: "Aatrox mecha",
                    price: 5,
                    quantity: 1,
                    total: 0
                }
            ],
            totalBasket: 0,  
        }
    },
})
</script>



<style>
#basket .main-basket-container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}
#basket .product-to-pay {
    position: relative;
    width: 60%;
    height: fit-content;
    border: 2px solid #c28f2c;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: 30px;
    padding-bottom: 60px;
}
#basket .title-product-to-pay {
    font-size: 25px;
}
#basket .product-to-pay .line-product {
    display: flex;
    background-color: #f0b33a;
    opacity: 0.8;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
} 
#basket .line-product-skin {
    width: 40%;
}
/* #basket .product-to-pay .line-product .price-p {
    text-align: right;
    padding-right: 15px;
} */
#basket .product-to-pay .line-product .skin-p {
    padding-left: 15px;
}
#basket .product-to-pay .line-product:nth-child(2n) {
    background-color: #cbcbcb;
}
#basket .quantity {
    width: 30px;
    height: 28px;
    background-color: white;
    text-align: center;
    border: 1px solid black;
}
#basket .pay {
    position: relative;
    width: 30%;
    height: fit-content;
    background-color: #21181C;
    border: 2px solid #c28f2c;
    color: white;
    margin-right: 30px;
    border-radius: 5px;
    padding-bottom: 60px;
}
#basket .buy-product-to-pay {
    position: absolute;
    bottom: 0;
    right: 0;
}
#basket .button-buy {
    padding: 20px 40px;
    background-color: #c28f2c;
    font-weight: bold;
    color: white;
    border-radius: 5px;
    border: 0;
    margin: 15px;
    font-size: 18px;
    transition: all .2s;
    cursor: pointer;
}
#basket .buy-pay .button-buy {
    margin: 15px auto;
}
#basket .title-pay {
    text-align: center;
    font-size: 25px;
}
#basket .buy-pay {
    position: absolute;
    bottom: 0;
    left: calc(50% - 104px);
}
#basket .buy-pay .button-buy {
    width: 208px;
}
#basket .buy-product-to-pay .button-buy:hover, #basket .buy-pay .button-buy:hover {
    background-color: #f0b33a;
}
#basket .column-list-price-container {
    display: flex;
    flex-direction: column;
}
#basket .ul-price {
    display: flex;
    flex-direction: column;
}
#basket .li-price {
    padding: 0 20px;
    font-size: 18px;
}
#basket .name-product { 
    color: #f3c261;
}
#basket .basket-product {
    color: white;
}
#basket .total-container {
    font-size: 26px;
    text-align: center;
}
#basket .ul-line-product {
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: 18px;
}
#basket .title-total-basket-container{
    text-align: right;
}
#basket .title-total-basket{
    font-size: 25px;
}
#basket .form-basket-container{
    text-align: left;
    padding: 10px 30px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}
#form-delivery .form-basket-container > label, #form-delivery .form-basket-container > input {
    width: 50%;
    font-size: 17px;
}
#basket #form-delivery .form-basket-container.form-delivery > label, #basket #form-delivery .form-basket-container.form-delivery > input {
    width: 100%;
}
#basket .quantity-container {
    display: flex;
}
#basket .input-symbol {
    width: 30px;
    height: 30px;
    background-color: #ffe9bd;
    text-align: center;
    border: 1px solid black;
    font-size: 20px;
    cursor: pointer;
}
#basket .product-to-pay .line-product:nth-child(2n) .input-symbol {
    background-color: #e1e1e1;
}
#basket .quantity-container > input[type="number"] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
}
#basket .line-product .delete-line-product {
    width: 20px;
    height: 20px;
    text-align: center;
    color: red;
    background-color: white;
    border: 1px solid #d5d5d5;
    cursor: pointer;
}
@media screen and (max-width:768px) {
    #basket .main-basket-container {
        flex-direction: column;
        margin-top: 0;
    }
    #basket .product-to-pay {
        width: 90%;
        margin: 25px auto;
        padding-bottom: 75px;
    }
    #basket .pay {
        width: 60%;
        margin: 25px auto;
    }
    #basket .ul-line-product {
        flex-wrap: wrap;
    }
    #basket .line-product-skin , #basket .line-product-quantity {
        width: 60%;
    }
    #basket .line-product-price , #basket .line-product-total {
        width: 40%;
    }
}
@media screen and (max-width:576px) {
    #basket .pay {
        width: 90%;
    }
    #form-delivery .form-basket-container > label, #form-delivery .form-basket-container > input {
        width: 100%;
    }
}
</style>