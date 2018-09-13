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
        text:
          'Terminar los filtros de "all", "active" y "completed" de forma dinamica.',
        completed: false,
      },
      {
        text: 'Agregar soporte para local storage',
        completed: true,
      },
      {
        text: 'Pasarle a Leo el esquema de datos y un link de navegacion',
        completed: false,
      },
      {
        text: 'Integrarlo con Firebase',
        completed: false,
      },
      {
        text: 'Get an unicorn 🦄',
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
