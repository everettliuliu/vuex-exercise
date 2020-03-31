const state = {
    count: 0
}
const getters = {
    //不会改变state中的状态数据
    count: state => {
        return state.count
    },

}
const mutations = {
    //改变state中的状态数据
    increment(state) {
        state.count++
    },
    decrement(state, obj) {
        state.count -= obj.amount
    },
}
const actions = {
    incrementAsync({ commit }) {
        setTimeout(() => {
            commit('increment')
        }, 2000)
    },
    decrementAsync({ commit }, obj) {
        setTimeout(() => {
            commit('decrement', obj)
        }, 2000)
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}