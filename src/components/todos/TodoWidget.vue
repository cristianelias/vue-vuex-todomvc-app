<template>
  <section class="todoapp">
    <AddTodo />

    <!-- This section should be hidden by default and shown when there are todos -->
    <TodoList />

    <!-- This footer should hidden by default and shown when there are todos -->
    <TodoFilters
      v-show="allTodos.length > 0" />
  </section>
</template>

<script>
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'
import { mapGetters } from 'vuex'

export default {
  name: 'TodoWidget',
  components: {
    TodoList,
    AddTodo,
    TodoFilters,
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
}
</script>
