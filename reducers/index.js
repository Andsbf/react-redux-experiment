import { combineReducers } from 'redux'
import todos from './todos'
import globalState from './globalState'
import formFields from './formFields'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  globalState,
  formFields,
  todos,
  visibilityFilter
})

export default todoApp
