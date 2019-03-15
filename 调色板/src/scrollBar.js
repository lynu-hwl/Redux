import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'

class ScrollBar extends React.Component{

    constructor(){
        super()
        // this.colorChange = this.colorChange.bind(this)
    }
    
    colorChange(type,event){
        if(type === 'R'){
            this.props.dispatch(actions.rChange(event.target.value))
        }else if(type === 'G'){
            this.props.dispatch(actions.gChange(event.target.value))
        }else if(type === 'B'){
            this.props.dispatch(actions.bChange(event.target.value))
        }
    }

    colorReduce(type){
        this.props.dispatch(actions.reduceChange(type))
    }

    colorAdd(type){
        this.props.dispatch(actions.addChange(type))
    }

    render(){
        const {r,g,b,color} = this.props;
        let colorInput = undefined;
        switch (color) {
            case 'r':
                colorInput = <div>
                                <button onClick={this.colorReduce.bind(this,'R')}>-</button>
                                <div className='colorInput' style={{background: `-webkit-linear-gradient(left, rgb(${0},${g},${b}) , rgb(${255},${g},${b}))`}}>
                                    <input type="range" min="0" max="255" value={r} onChange={this.colorChange.bind(this,'R')}/>
                                </div>
                                <button onClick={this.colorAdd.bind(this,'R')}>+</button>
                              </div>
                break;
            case 'g':
                colorInput = <div>
                                <button onClick={this.colorReduce.bind(this,'G')}>-</button>
                                <div className='colorInput' style={{background: `-webkit-linear-gradient(left, rgb(${r},${0},${b}) , rgb(${r},${255},${b}))`}}>
                                    <input type="range" min="0" max="255" value={g} onChange={this.colorChange.bind(this,'G')}/>
                                </div>
                                <button onClick={this.colorAdd.bind(this,'G')}>+</button>
                              </div>
                break;
            case 'b':
                colorInput = <div>
                                <button onClick={this.colorReduce.bind(this,'B')}>-</button>
                                <div className='colorInput' style={{background: `-webkit-linear-gradient(left, rgb(${r},${g},${0}) , rgb(${r},${g},${255}))`}}>
                                    <input type="range" min="0" max="255" value={b} onChange={this.colorChange.bind(this,'B')}/>
                                </div>
                                <button onClick={this.colorAdd.bind(this,'B')}>+</button>
                             </div>
                break;
            default:
                break;
        }
        return(
            <div>
                {colorInput}
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
)(ScrollBar)
