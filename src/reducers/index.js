import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import myFilter from './myFilter'

const todoApp = combineReducers({
  todos,
  myFilter,
  visibilityFilter,
})

export default todoApp
