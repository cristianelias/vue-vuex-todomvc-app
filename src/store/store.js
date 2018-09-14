import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filters: [
      {
        key: 'All',
        active: true,
        getter: 'allTodos',
      },
      {
        key: 'Active',
        active: false,
        getter: 'activeTodos',
      },
      {
        key: 'Completed',
        active: false,
        getter: 'completedTodos',
      },
    ],
    todos: [
      {
        text: 'Comprarle Royal Canin a Wilson 🐈',
        completed: false,
      },
      {
        text: 'Matear con Nelsito en el auto ❤️',
        completed: true,
      },
      {
        text: 'Pagar deudas',
        completed: false,
      },
      {
        text: 'Conseguir un unicornio 🦄',
        completed: true,
      },
      {
        text: 'Cabalgar en unicornio 🦄 hacia la libertad',
        completed: false,
      },
    ],
  },
  getters: {
    allTodos: state => state.todos,
    activeTodos: state => state.todos.filter(todo => !todo.completed),
    completedTodos: state => state.todos.filter(todo => todo.completed),
    filters: state => state.filters,
    activeFilter: state => state.filters.filter(filter => filter.active)[0],
    filteredTodos: (state, getters) => getters[getters.activeFilter.getter],
  },
  mutations,
  actions,
})
