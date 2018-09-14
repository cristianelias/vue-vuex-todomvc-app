export default {
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
}
