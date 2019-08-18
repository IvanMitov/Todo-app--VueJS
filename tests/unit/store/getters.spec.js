import getters from './getters'

test('todos returns empty array during startup', () => {
  const state = {
    todos: []
  }
  expect(getters.todos(state).length).toBe(0)
})

test('todos returns a non-empty array after adding new todo', () => {
  const state = {
    todos: [{
      'title': 'Todo title',
      'completed': false,
      'id': '2156293853'
    }]
  }
  expect(getters.todos(state).length).not.toBe(0)
})
