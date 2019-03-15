import $ from 'jquery';
export const add=()=>(dispatch)=>{
  $.get("../num.txt",(data)=>{
    return dispatch({type:"ADD",num:data})
  })
}
// export const add=()=>({type:"ADD",num:5})
export const reduce=()=>({type:"REDUCE"})