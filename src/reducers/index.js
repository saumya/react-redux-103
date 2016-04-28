import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import myFilter from './myFilter'

const todoApp = combineReducers({
  myFilter,
  todos,
  visibilityFilter,
})

export default todoApp
