import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import '../css/main.css'
import ScrollBar from './scrollBar'

console.log(ScrollBar,'ScrollBar')

class Main extends React.Component{

    render(){
        const {r,g,b} = this.props;
        return(
            <div>
                <div style={{backgroundColor:`rgb(${r},${g},${b})`}} className='showWindow'></div>
                <ScrollBar color='r'/>
                <ScrollBar color='g'/>
                <ScrollBar color='b'/>
            </div>

        )
    }
}

export default connect(
    (state)=>{
        return{
            r:state.r,
            g:state.g,
            b:state.b
        }
    }
)(Main)