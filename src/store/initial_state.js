export default {
  filters: [
    {
      key: 'All',
      active: true,
      getter: 'allTodos',
    },
    {
      key: 'Active',
      active: false,
      getter: 'activeTodos',
    },
    {
      key: 'Completed',
      active: false,
      getter: 'completedTodos',
    },
  ],
  todos: [
    {
      text: 'Comprarle Royal Canin a Wilson 🐈',
      completed: false,
    },
    {
      text: 'Matear con Nelsito en el auto ❤️',
      completed: true,
    },
    {
      text: 'Pagar deudas',
      completed: false,
    },
    {
      text: 'Conseguir un unicornio 🦄',
      completed: true,
    },
    {
      text: 'Cabalgar en unicornio 🦄 hacia la libertad',
      completed: false,
    },
  ],
}
