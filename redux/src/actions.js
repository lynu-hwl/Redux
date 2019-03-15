import $ from 'jquery'

export const add = ()=>(dispatch)=>{
    $.get('../text.txt',function(data){
        dispatch({type:'ADD',data:Number(data)})
    })
}
export const reduce = ()=>(dispatch,getState)=>{
    console.log(dispatch,'dispatch')
    console.log(getState(),'getState')
    dispatch({type:'REDUCE',data:getState().b})
}
export const division = ()=>({type:'DIVISION',data:3})