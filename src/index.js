//
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoAppReducers from './reducers'
import App from './components/App'

let store = createStore(todoAppReducers)

const rootEL = document.getElementById('react-app');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEL
)
