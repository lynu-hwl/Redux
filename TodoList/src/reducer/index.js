import {combineReducers} from 'redux'
import todos from './todos'
import type from './type'

export default combineReducers({
    todos,
    type
})