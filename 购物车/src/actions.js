import $ from 'jquery'

export const reduce=(index)=>{
    return {type:'REDUCE',index}
}

export const add=(index)=>{
    return {type:'ADD',index}
}