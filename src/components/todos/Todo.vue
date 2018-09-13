<template>
  <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
  <li 
    :class="{ completed: todo.completed, editing: editing }"
    @dblclick="editing = true">
    <div class="view">
      <input 
        class="toggle" 
        type="checkbox" 
        :checked="todo.completed"
        @click="toggleCompleteTodo(todo)">

      <label> {{todo.text}} </label>

      <button 
        class="destroy"
        @click="removeTodo(todo)"></button>
    </div>
    <input 
      class="edit" 
      :value="todo.text"
      v-focus="editing"
      v-show="editing"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="cancelEdit">
  </li>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Todo',
  data() {
    return {
      editing: false,
    }
  },
  directives: {
    focus(el, { value }, { context }) {
      if (value) {
        context.$nextTick(() => el.focus())
      }
    },
  },
  props: ['todo'],
  methods: {
    ...mapActions(['toggleCompleteTodo', 'removeTodo', 'editTodo']),
    doneEdit(e) {
      const text = e.target.value
      this.editTodo({ todo: this.todo, text })
      this.editing = false
    },
    cancelEdit() {
      this.editing = false
    },
  },
}
</script>

<style>
.todo-list li label {
  word-break: break-word;
}
</style>
