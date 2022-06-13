import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        imageCats: [],
        wait: false,
        pages:1,
        favorites: []
    }

})
export default store