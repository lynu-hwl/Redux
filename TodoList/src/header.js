import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'


class Header extends React.Component{

    add(type,event){
        if((type==='enter' && event.keyCode == 13) || type==='button'){
            this.props.dispatch(actions.add(this.refs.newTodo.value))
            this.refs.newTodo.value = ''
        }
    }

    render(){
        return(
            <div>
                待办事项：
                <input type='text' ref='newTodo' onKeyUp={this.add.bind(this,'enter')}/>
                {' '}
                <button onClick={this.add.bind(this,'button')}>添加</button>
            </div>
        )
    }
}

export default connect()(Header)