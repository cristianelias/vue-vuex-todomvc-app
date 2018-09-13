<template>
  <section class="todoapp">
    <AddTodo />

    <!-- This section should be hidden by default and shown when there are todos -->
    <TodoList />

    <!-- This footer should hidden by default and shown when there are todos -->
    <TodoFilters
      v-show="todosCount > 0" />
  </section>
</template>

<script>
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'

export default {
  name: 'TodoWidget',
  components: {
    TodoList,
    AddTodo,
    TodoFilters,
  },
  computed: {
    todosCount() {
      return this.$store.getters.allTodos.length
    },
  },
}
</script>
