<template>
  <header class="header">
      <h1>todos</h1>
      <input 
        class="new-todo"
        placeholder="What needs to be done?"
        autofocus
        @keyup.enter="handleTodoSubmit">
  </header>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  methods: {
    ...mapActions(['createTodo']),
    handleTodoSubmit(e) {
      const todoText = e.target.value

      if (todoText.length > 0) {
        this.createTodo(todoText)
        e.target.value = ''
      }
    },
  },
}
</script>

<style>
</style>
