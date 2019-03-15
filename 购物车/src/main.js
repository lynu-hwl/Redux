import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
import '../css/main.css'
import Ware from './ware'

class Main extends React.Component{

    render(){
        const {wares,total,totalPrice} = this.props;
        return(
            <div>
                {
                    wares.map((item,index)=>{
                        return <Ware key={index} item={item} index={index}/>
                    })
                }
                <h1>总数：{total}</h1>
                <h1>总价：{totalPrice}</h1>
            </div>

        )
    }
}

export default connect(
    (state)=>{
        return{
            wares:state.wares,
            total:state.total,
            totalPrice:state.totalPrice
        }
    }
)(Main)