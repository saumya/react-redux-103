//
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoAppReducers from './reducers'
import TodoApp from './components/TodoApp'

let store = createStore(todoAppReducers)

const rootEL = document.getElementById('react-app');
render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootEL
)
