import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {App} from './block.js'

let store = createStore(reducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider  store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)




