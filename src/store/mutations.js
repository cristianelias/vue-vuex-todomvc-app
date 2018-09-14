export default {
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
}
