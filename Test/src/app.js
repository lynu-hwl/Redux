import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {add,reduce} from './actions.js';

class App extends React.Component{
  constructor({value1,value2}){
    super();
    // console.log(this.props.dispatch, "this.props.dispatch")
  }
  addApp(){
    // console.log(this.props.dispatch, "this.props.dispatch")
    this.props.dispatch(add())
  }
  reduceApp(){
    this.props.dispatch(reduce())
  }
  render(){
    // console.log(this.props,"props")
    return (
      <div>
        <h1>{this.props.value1}</h1>
        <h1>{this.props.value2}</h1>
        <button onClick={this.addApp.bind(this)}>+</button>
        {" "}
        <button onClick={this.reduceApp.bind(this)}>-</button>
      </div>

    )
  }
}

export default connect(
  (state)=>{
    return {value1:state.val1,value2:state.val2}
  }              
)(App)