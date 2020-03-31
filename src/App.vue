<template>
  <div id="app">
    <!-- state & getters -->
    <!-- <p>{{count}}</p>
    <p>{{completedList}}</p>
    <p>{{completedListCount}}</p>
    <p>{{getById(2)}}</p> -->
    
    <!-- mutations -->
    <!-- <button @click="increment">+</button> -->
    <!-- actions -->
    <button @click="incrementAsync">+</button>
    <span>{{count}}</span>
    <button @click="decrementAsync({amount:2})">-</button>
    <br />
    <br />
    <!-- fatchTodo -->
    <div>{{completedList}}</div>
    <button @click="fetchTodo">获取数据</button>
  </div>
</template>

<script>
import {mapState, mapGetters,mapMutations,mapActions} from 'vuex'

export default {
  name: 'App',
  components:{

  },
  computed:mapGetters([
    'count',
    'completedList',
    'completedListCount',
    'getById'
  ]),
  //mapActions
  methods: mapActions([
      "incrementAsync",
      "decrementAsync",
      "fetchTodo"
  ]),
    //methods:{
    //actions 提交mutations 可以异步
    // increment(){
    //   this.$store.dispatch('incrementAsync')
    // },
    // decrement(m){
    //   this.$store.dispatch('decrementAsync',m)
    // },
    // fetchTodo(){
    //   this.$store.dispatch('fetchTodo')
    // }
    // mapMutations
    // mapMutations([
    // 'increment',
    // 'decrement'
    // ])
    // mutations 只能同步
    // increment(){
    //   this.$store.commit('increment')
    // },
    // decrement(m){
    //   this.$store.commit('decrement',m)
    // }
  // },
  // mapGetters
  
  // getters
  // computed:{
  //   count(){
  //     return this.$store.getters.count
  //   },
  // completedList(){
  //   return this.$store.getters.completedList
  // },
  //   completedListCount(){
  //     return this.$store.getters.completedListCount
  //   },
  //   getById(){
  //     return this.$store.getters.getById
  //   }
  // }
  // state & mapState
  // computed:mapState({//辅助state
  //   count:state => state.count,
  //   todoList:state => state.todoList
  //   count(){
  //    return this.$store.state.count
  //   }
  // }
}
</script>

<style>

</style>
