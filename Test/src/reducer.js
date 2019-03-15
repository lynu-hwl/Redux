
export default function reducer(state={"val1":10,"val2":20},action){

  if(action.type==="ADD"){
    
    // JSON.parse(JSON.stringify(y)).val1 + state.val1+action.num
    // y.val1 = state.val1 + action.num;
    return Object.assign({},state,{
      val1:state.val1+action.num
    })
    // return {val1:11,val2:22}
  }
  if(action.type==="REDUCE"){
    return Object.assign({},state,{
      val2:state.val2-1
    })
  }
  return state;
}