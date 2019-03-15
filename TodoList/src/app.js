import React from 'react'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger';
import reducer from './reducer/index'
import Header from './header'
import List from './list'
import '../css/main.css'

const logger = createLogger();
let store = createStore(reducer,applyMiddleware(thunk,logger))

ReactDOM.render(
  <Provider  store={store}>
    <Header/>
    <List/>
  </Provider>,
  document.getElementById('app')
)




