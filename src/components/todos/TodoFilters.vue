<template>
  <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{ activeTodosCount }}</strong> item{{activeTodosCount > 1 ? 's' : ''}} left</span>
      
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li 
          v-for="(filter, index) in filters"
          :key="index">
          <a :class="{selected: filter.active}"
             :href="filter.path"
             @click="setActiveFilter(filter)">
            {{ filter.key }}
          </a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button 
        class="clear-completed"
        @click="clearCompletedTodos">
        Clear completed
      </button>
    </footer>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoFilters',
  methods: {
    ...mapActions([
      'clearCompletedTodos',
      'setTodoVisibility',
      'setActiveFilter',
    ]),
  },
  computed: {
    activeTodosCount() {
      return this.$store.getters.activeTodos.length
    },
    filters() {
      return this.$store.getters.filters
    },
  },
}
</script>
