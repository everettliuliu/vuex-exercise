const state = {
    todoList: [{
            id: 1,
            title: 'todo 1',
            completed: true
        },
        {
            id: 2,
            title: 'todo 2',
            completed: false
        },
        {
            id: 3,
            title: 'todo 3',
            completed: false
        }
    ]
}
const getters = {
    completedList: state => {
        return state.todoList.filter(todo => todo.completed)
    },
    completedListCount: (state, getters) => {
        return getters.completedList.length
    },
    getById: state => (id => {
        return state.todoList.find(todo => todo.id === id)
    })
}
const mutations = {
    setList(state, arr) {
        state.todoList = arr
    }
}
const actions = {
    //async 异步
    async fetchTodo({ commit }) {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?_limit=10"
        )
        console.log(response)
        commit('setList', response.data)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}