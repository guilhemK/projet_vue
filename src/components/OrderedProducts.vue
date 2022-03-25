<template>
    <div id="home">
        <section>
            <div class="main-title-container">
                <h2>Liste de mes Skins</h2>
            </div>
                
            <div class="top-skins-list-container">  
                <input type="search" placeholder="Rechercher..." class="top-search">
                <div class="dropdown">
                    <span>Champions</span>
                    <ul v-for="(champion) in champions" :key="champion.id" class="dropdown-content">
                      <li><a href="">{{ champion.name }}</a></li>  
                    </ul>
                </div>
            </div>
        </section>
        <section id="all-skins-main-container">
            <div class="champion-skins-main-container">
                <div class="champion-title-container">
                    <h3>AATROX</h3>
                </div>
            
                <div v-for="(champion) in champions" :key="champion.id" class="champion-skins-container">
                    <router-link v-for="(skin) in champion.skins" :key="skin.id" :to="{ name:'SkinCard', params: { championId: champion.id, skinId: skin.id }}"> 
                        <div class="champion-skin-card">
                            <div class="champion-img-container">
                                <img :src="'./img/'+champion.name+'/'+skin.img" :alt="skin.name">
                            </div>
                            <h4>{{ skin.name }}</h4>   
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="champion-skins-main-container">
                <div class="champion-title-container">
                    <h3>AHRI</h3>  
                </div>
                <div class="champion-skins-container">
                    <a href="./product.php">
                        <div class="champion-skin-card">
                            <div class="champion-img-container">
                                <img src="" alt="">
                            </div>
                            <h4>Ahri dynastique</h4>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div> 
</template>
<script>
import { mapState } from "vuex";
export default({
    name:'OrderedProducts',
    // data: function() {
    //     return {
    //         champions: [],
    //     }     
    // },
    computed: {
        ...mapState(["champions"])
    },
    // mounted: function() {
        
    //     fetch("../data/products.json")
    //     .then(response => {
    //         if(response.ok) {
    //             response.json().then(json => {
    //                 this.champions = json;
    //             });
    //         } else {
    //         console.log('Erreur pour data_products.json ' + response.status + ': ' + response.statusText);
    //         }
    //     });
    // },
})
</script>
<style>
.main-title-container {
    text-align: center;
}
.main-title-container > h2 {
    color: #c28f2c;
}
.top-skins-list-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 83%;
    border-radius: 5px;
    border: 1px solid rgb(200, 199, 199);
    margin: auto;
}
.top-skins-list-container .top-search {
    padding: 15px;
    border: 0;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
}
.top-skins-list-container .dropdown {
    position: relative;
    display: inline-block;
    padding: 15px 75px;
}
.top-skins-list-container .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
    padding: 15px 0;
}
.top-skins-list-container .dropdown:hover .dropdown-content {
    display: block;
}
.top-skins-list-container .dropdown-content li {
    padding: 15px 5px;
    text-align: center;
}
.top-skins-list-container .dropdown-content li:hover {
    background-color: white;
}
.top-skins-list-container .dropdown-content a {
    text-decoration: none;
    color: black;
    display: block;
}
.top-skins-list-container .dropdown-content li:hover a {
    color: #c28f2c;
}
#all-skins-main-container {
    display: flex;
    flex-direction: column;
}
.champion-skins-main-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: auto;
}
.champion-title-container > h3 {
    margin: 20px 0 10px 10px;
    font-size: 35px;
}
.champion-skins-main-container .champion-skins-container {
    display: flex;
    flex-wrap: wrap;
}
.champion-skins-main-container .champion-skins-container > a {
    text-decoration: none;
}
.champion-skins-container .champion-skin-card {
    text-align: center;
    background-color: #21181C;
    border-radius: 5px;
    margin: 10px 15px;
    width: 270px;
    height: 350px;
    color: white;  
}
.champion-skins-container .champion-skin-card:hover {
    background-color: rgb(0 102 128); 
}
.champion-skins-container .champion-skin-card .champion-img-container {
    height: 290px;
    overflow: hidden;
}
.champion-skins-container .champion-skin-card img {
    object-fit: cover;
    object-position: 50% 0%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    width: 100%;
    height: 100%;
    transition: transform .5s; 
}
.champion-skins-container .champion-skin-card img:hover {
  transform: scale(1.25);  
}
@media screen and (max-width:768px) {
    .champion-skins-main-container .champion-skins-container {
        justify-content: space-around;
    }
}
</style>