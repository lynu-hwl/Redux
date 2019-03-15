import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import {connect } from 'react-redux'

import * as actions from './actions'

class Block extends Component {

  constructor(){
    super();
  }
  add(){
    this.props.dispatch(actions.add())
  }
  reduce(){
    this.props.dispatch(actions.reduce())
  }
  division(){
    this.props.dispatch(actions.division())
  }
  render(){
    let {state} = this.props;
    return(
      <div>     
        <h1>A = {state.a}</h1>
        <button onClick={this.add.bind(this)}>+</button>
        <button onClick={this.reduce.bind(this)}>-</button>
        <button onClick={this.division.bind(this)}>%</button>
      </div>
    )
  }
}
// 任何对state的改变之前都会顺序执行中间件
export const App = connect(
  (state)=>{
    return {state}
  }
  // (dispatch)=>{
  //   let newActions = bindActionCreators(actions,dispatch)
  //   return{
  //     add:newActions.add,
  //     reduce:newActions.reduce
  //   }
  // }
)(Block)
