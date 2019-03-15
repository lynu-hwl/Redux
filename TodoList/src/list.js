import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import Item from './item'

class List extends React.Component{

    constructor(){
        super();
    }

    whole(){
        this.props.dispatch(actions.whole())
    }

    complete(){
        this.props.dispatch(actions.complete())
    }

    noComplete(){
        this.props.dispatch(actions.noComplete())
    }

    render(){
        let completed = 0,todos = []
        this.props.todos.forEach(item => {
            if(item.isComplete) {
                completed = completed + 1
            }
        });
        
        switch(this.props.type){
            case 'WHOLE':
                todos = this.props.todos
                break;
            case 'COMPLETE':
                todos = this.props.todos.filter((item)=>{
                    return item.isComplete
                })
                break;
            case 'NOCOMPLETE':
                todos = this.props.todos.filter((item)=>{
                    return !item.isComplete
                })
                break;
        }

        return(
            <div>
                {
                    todos.map((item)=><Item item={item} dispatch={this.props.dispatch}/>)
                }
                <span>总共：{this.props.todos.length}</span>
                <span>已完成：{completed}</span>
                <span>未完成：{this.props.todos.length - completed}</span>
                <br/>
                <button onClick={this.whole.bind(this)}>全部</button>
                <button onClick={this.complete.bind(this)}>完成</button>
                <button onClick={this.noComplete.bind(this)}>进行中</button>
            </div>
        )
    }
}

export default connect(
    (state)=>{
        return {
            todos:state.todos,
            type:state.type
        }
    }
)(List)
