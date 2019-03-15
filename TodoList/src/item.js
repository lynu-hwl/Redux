import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'


class Item extends React.Component{

    constructor(){
        super();
        this.state = {
            isShowEditInput:false
        }
    }

    showEditInput(refname){
        this.setState({
            isShowEditInput:true
        })
        setTimeout(()=>{
            this.refs[refname].focus();
        },100)
    }

    blurFocus(id,event){
        if(event.target.value){
            this.props.dispatch(actions.changeContent(id,event.target.value))
        }
        this.setState({
            isShowEditInput:false
        })
    }

    deleteTodo(id){
        this.props.dispatch(actions.deleteTodo(id))
    }

    checkedChange(id){
        this.props.dispatch(actions.changeIsComplete(id))
    }

    render(){
        const {item} = this.props;
        const {isShowEditInput} = this.state;
        return(
            <div>
                <input 
                    type='checkbox' 
                    checked={item.isComplete} 
                    onChange={this.checkedChange.bind(this,item.id)}/>
                <input 
                    type='text' 
                    ref={`ref-${item.id}`} 
                    className={isShowEditInput?'':'hideElement'} 
                    onBlur={this.blurFocus.bind(this,item.id)}/>
                <div  
                    onDoubleClick={this.showEditInput.bind(this,`ref-${item.id}`)} 
                    className={isShowEditInput?'hideElement':item.isComplete?'itemContent completeTodo':'itemContent'}>
                    {item.content}
                </div>
                {' '}
                <button onClick={this.deleteTodo.bind(this,item.id)}>x</button>
            </div>
        )
    }
}

export default Item