import Vue from 'vue'
import Vuex from 'vuex'
import count from './module/count'
import todo from './module/todo'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        count,
        todo
    }
})