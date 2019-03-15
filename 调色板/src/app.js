import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import Main from './main.js'

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
let store = createStoreWithMiddleware(reducer)

ReactDOM.render(
  <Provider  store={store}>
    <Main/>
  </Provider>,
  document.getElementById('app')
)




