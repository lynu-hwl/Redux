import $ from 'jquery'

export const rChange = (value)=>{
   return {type:'R',value}
}
export const gChange = (value)=>{
    return {type:'G',value}
}
export const bChange = (value)=>{
    return {type:'B',value}
}
export const reduceChange = (type)=>(dispatch,getState)=>{
    $.get('../text.txt',function(value) {
        const state = getState()
        switch(type){
            case 'R':
                if(state.r-value >=0){
                    dispatch({type:'REDUCE-R',value})
                }
                break;
            case 'G':
                if(state.g-value >=0){
                    dispatch({type:'REDUCE-G',value})
                }
                break;
            case 'B':
                if(state.b-value >=0){
                    dispatch({type:'REDUCE-B',value})
                }
                break;
        }
    })
}
export const addChange = (type)=>(dispatch,getState)=>{
    $.get('../text.txt',function(value) {
        const state = getState()        
        switch(type){
            case 'R':
                if(state.r+Number(value) <= 255){
                    dispatch({type:'ADD-R',value})
                }
                break;
            case 'G':
                if(state.g+Number(value) <= 255){
                    dispatch({type:'ADD-G',value})
                }
                break;
            case 'B':
                if(state.b+Number(value) <= 255){
                    dispatch({type:'ADD-B',value})
                }
                break;
        }
        
    })
}