import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

class Ware extends React.Component{

    constructor(){
        super();
    }

    reduce(index){
        this.props.dispatch(actions.reduce(index))
    }

    add(index){
        this.props.dispatch(actions.add(index))
    }

    render(){
        const {item:{name,price,num},index} = this.props;
        console.log(this.state.isDisabled)
        return(
            <div>
                <div>产品名：{name}</div>
                <div>单价：{price}</div>
                <div>数量：{num}</div>
                <button disabled={num===0} onClick={this.reduce.bind(this,index)}>-</button>

                <button onClick={this.add.bind(this,index)}>+</button>
                <hr/>
            </div>
        )
    }
}

export default connect(

)(Ware)
