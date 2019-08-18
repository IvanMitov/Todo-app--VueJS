import mutations from './mutations'

test('Delete todo from list', () => {
  const state = {
    todos: [{
      'title': 'Todo title',
      'completed': false,
      'id': '2156293853'
    }]
  }
  const todo = {
    'title': 'Todo title',
    'completed': false,
    'id': '2156293853'
  }
  mutations.deleteTodo(state, todo)
  expect(state.todos.includes(todo)).toBeFalsy()
})
