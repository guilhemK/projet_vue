import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authentification: false,
    champions:
    [
      {
          "id":1,
          "name":"Aatrox",
          "skins":[
              {
                  "id": 1,
                  "name": "Aatrox lune de sang Edition Prestige",
                  "price": 20,
                  "img":"Aatrox_lune_de_sang_prestige.jpg"
              },
              {
                  "id": 2,
                  "name": "Aatrox lune de sang",
                  "price": 10,
                  "img":"Aatrox_lune_de_sang.jpg"
              },
              {
                  "id": 3,
                  "name": "Aatrox mecha",
                  "price": 5,
                  "img":"Aatrox_mecha.jpg"
              },
              {
                  "id": 4,
                  "name": "Aatrox héros de guerre",
                  "price": 7,
                  "img":"aatrox_heros_de_guerre.jpg"
              },
              {
                  "id": 5,
                  "name": "Aatrox chasseur marin",
                  "price": 7,
                  "img":"Aatrox_pecheur.jpg"
              },
              {
                  "id": 6,
                  "name": "Aatrox justicier",
                  "price": 15,
                  "img":"Aatrox_justicier.jpg"
              }
          ]
      }
  ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
