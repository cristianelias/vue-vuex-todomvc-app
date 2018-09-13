<template>
  <section class="main">
      <input 
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        @change="markAllTodosAs">
      <label
        for="toggle-all">
        Mark all as complete
      </label>
      <ul class="todo-list">
        <Todo
          v-for="(todo, index) in filteredTodos" 
          :key="index"
          :todo="todo"
          />
      </ul>
    </section>
</template>

<script>
import Todo from './Todo'
import { mapActions } from 'vuex'

export default {
  name: 'TodoList',
  components: {
    Todo,
  },
  methods: {
    ...mapActions(['markAllTodosAsCompleted', 'markAllTodosAsActive']),
    markAllTodosAs(e) {
      return e.target.checked
        ? this.markAllTodosAsCompleted()
        : this.markAllTodosAsActive()
    },
  },
  computed: {
    filteredTodos() {
      return this.$store.getters.filteredTodos
    },
  },
}
</script>
