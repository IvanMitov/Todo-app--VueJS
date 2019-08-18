import { createLocalVue, mount } from '@vue/test-utils'
import Todos from '@/components/Todos'
import Vuex from 'vuex'
import ElementUI from 'element-ui'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(ElementUI)

describe('Todos.vue', () => {
  let actions
  let store
  let getters
  let state
  let wrapper

  beforeEach(() => {
    state = {
      todos: []
    }
    actions = {
      loadTodos: jest.fn(),
      addTodo: jest.fn(),
      deleteTodo: jest.fn(),
      updateTodo: jest.fn(),
      clearNewTodo: jest.fn()
    }
    getters = {
      todos: () => []
    }
    store = new Vuex.Store({
      state,
      actions,
      getters
    })

    wrapper = mount(Todos, {
      localVue,
      store
    })
  })

  test('renders a todos vue instance', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  test('Add todo button should be disabled for empty input', () => {
    wrapper.newTodo = 'Create Vue.js project'

    const button = wrapper.find('button')

    expect(button.attributes().disabled).toBeTruthy()
  })

  test('calls store action "addTodo" and "loadTodos" when button is clicked', () => {
    const button = wrapper.find('button')
    button.element.disabled = false

    button.trigger('click')
    expect(actions.addTodo).toHaveBeenCalled()
    expect(actions.loadTodos).toHaveBeenCalled()
  })
})
