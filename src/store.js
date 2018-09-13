import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    toggleCompleteTodo(state, todo) {
      todo.completed = !todo.completed
    },
    createTodo(state, text) {
      state.todos.push({
        text,
        completed: false,
      })
    },
    editTodo(state, { todo, text }) {
      todo.text = text
    },
    removeTodo(state, todo) {
      state.todos.splice(state.todos.indexOf(todo), 1)
    },
    setActiveFilter(state, newFilter) {
      state.filters.forEach(
        iteratingFilter =>
          (iteratingFilter.active = iteratingFilter.key === newFilter.key)
      )
    },
    markAllTodosAsCompleted(state) {
      state.todos.forEach(todo => (todo.completed = true))
    },
    markAllTodosAsActive(state) {
      state.todos.forEach(todo => (todo.completed = false))
    },
  },
  actions: {
    toggleCompleteTodo({ commit }, todo) {
      commit('toggleCompleteTodo', todo)
    },
    createTodo({ commit }, text) {
      commit('createTodo', text)
    },
    editTodo({ commit }, text) {
      commit('editTodo', text)
    },
    removeTodo({ commit }, todo) {
      commit('removeTodo', todo)
    },
    clearCompletedTodos({ state, commit }) {
      state.todos
        .filter(todo => todo.completed)
        .forEach(todo => commit('removeTodo', todo))
    },
    setActiveFilter({ commit }, filter) {
      commit('setActiveFilter', filter)
    },
    markAllTodosAsCompleted({ commit }) {
      commit('markAllTodosAsCompleted')
    },
    markAllTodosAsActive({ commit }) {
      commit('markAllTodosAsActive')
    },
  },
})
