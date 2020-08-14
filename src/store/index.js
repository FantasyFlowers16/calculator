import Vue from 'vue'
import Vuex from 'vuex'
import calc from './modules/calc'

Vue.use(Vuex)
export default new Vuex.Store({

    modules:{
        calc
    }
})