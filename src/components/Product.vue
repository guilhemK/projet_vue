<template>
    <div>
        <section v-if="skin">
            <div class="product-skin-card">
                <div class="product-img-skin">
                    <img :src="'./img/'+champion.name+'/'+skin.img" :alt="skin.name">
                </div>
                <div class="product-text-skin">
                    <h2>{{ skin.name }}</h2>
                </div>
            </div>
            <div class="price-skin-container">
                <p class="price-skin"><span>Prix :</span> {{ skin.price }} €</p>
            </div>
            <div class="buy-button-container">
                <router-link :to="{ name:'Home' }">Ajouter au panier</router-link>
            </div>
        </section>
        <section>
            <div class="payment-means-main-container">
                <div class="payment-means-container">
                    <div class="payment-means">
                        <p>Carte Bleu</p>
                    </div>
                    <div class="payment-means">
                        <p>PayPal</p>
                    </div>
                    <div class="payment-means">
                        <p>Virement</p>
                    </div>
                </div>
                <div class="use-terms-container">
                    <p>Conditions d'utilisations :</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default({
    name:'Product',
    data: function() {
        return {
            champions: [],
            skins:[],    
            championId: this.$route.params.championId,
            skinId: this.$route.params.skinId 
        }     
    },
    mounted: function() {
        fetch("../data/products.json")
        .then(response => {
            if(response.ok) {
                response.json().then(json => {
                    this.champions = json;
                });
            } else {
            console.log('Erreur pour data_products.json ' + response.status + ': ' + response.statusText);
            }
        });
    },
    computed: {
        champion: function() {
            return this.champions.find(champion => champion.id == this.championId);
        },
        skin: function() {
            return this.champion !== undefined 
            ? this.champion.skins.find(skin => skin.id == this.skinId)
            : null;
        },
        /*product: function() {
            let champion =  this.champions.find(champion => champion.id == this.championId);
            return {
                'champions': champion,
                'skin': champion.skins.find(skin => skin.id == this.skinId)
            }
        }*/
    }
})
</script>
<style scoped>
.product-skin-card {
    margin: auto;
    width: fit-content;
    background-color: #21181C;
}
.product-img-skin .skin-img {
    max-width: 100vw;

}
.product-text-skin {
    text-align: center;
    border-bottom: 5px solid #c28f2c;
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 20px;
}
.product-text-skin > h2 {
    margin: 0;
}
.buy-button-container {
    background-color: #c28f2c;
    border-radius: 5px;
    width: 400px;
    margin: 50px auto;
    text-align: center;
}
.buy-button-container:hover {
    background-color: #f0b33a;
}
.buy-button-container > a {
    text-decoration: none;
    font-size: 30px;
    display: block;
    padding: 25px 75px;
}
.payment-means-main-container {
    width: 80%;
    margin: auto; 
}
.payment-means-container {
    display: flex;
    justify-content: center;
    text-align: center;
}
.payment-means {
    width: 33.333%;
    border: 1px solid #c28f2c;
}
.use-terms-container {
    margin: 50px auto;
    border: 1px solid #c28f2c;
    padding: 15px;
}
.price-skin-container {
    text-align: center;
}
.price-skin {
    color: #c28f2c;
    font-size: 30px;
    margin: 50px 0 0 0
}
</style>