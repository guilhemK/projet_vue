<template>
    <section class="pay">
        <div class="title-pay">
            <h2>Paiement</h2>
        </div>
        <div class="column-list-price-container">
            <ul v-for="product in products" :key="product.id">
                <li>
                    <ul class="ul-price">
                        <li class="li-price">Produit : <span class="name-product">{{ product.name }}</span></li>
                        <li class="li-price price">Prix : <span class="basket-product total">{{ product.total }}</span> <span
                                class="basket-product">€</span></li>
                    </ul>
                </li>
            </ul>
        </div>
        <form id="form-delivery" action="/api/order" method="post">
            <div class="form-basket-container">
                <label for="basket-mail">Mail :</label>
                <input type="mail" name="basket-mail" id="basket-mail">
            </div>
            <div class="form-basket-container">
                <label for="basket-phone">Téléphone :</label>
                <input type="number" name="basket-phone" id="basket-phone" min="0">
            </div>
            <div class="form-basket-container form-delivery">
                <label for="basket-deliver">Adresse de livraison :</label>
                <input type="text" name="basket-deliver" id="basket-deliver" required>
            </div>
            <div class="form-basket-container">
                <label for="basket-postal">Code postal :</label>
                <input type="number" name="basket-postal" id="basket-postal" min="0" required>
            </div>
            <div class="total-container">
                <h5>Total : <span id="total-basket-2">{{ totalBasket }}</span> <span>€</span></h5>
            </div>
            <div class="buy-pay">
                <button type="submit" class="button-buy">Payer</button>
            </div>
        </form>
    </section>
</template>

<script>
export default({
    name: 'form-basket',
    props: [
        'products',
        'totalBasket',
    ],
})
</script>
