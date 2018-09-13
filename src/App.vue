<template>
<div>
  <TodoWidget />
  <Footer />
</div>
</template>

<script>
import TodoWidget from './components/todos/TodoWidget'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    TodoWidget,
    Footer,
  },
}
</script>
