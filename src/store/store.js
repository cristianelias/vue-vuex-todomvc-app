import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import plugins from './plugins'

import LocalStorageService from '../services/localstorage_service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: LocalStorageService.fetch(),
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
  plugins,
})
