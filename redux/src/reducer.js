
  export default function reducer(state={a:0,b:1}, action){
    switch(action.type){
      case 'ADD':
        return {...state,a:state.a+action.data}
      case 'REDUCE':
        return {...state,a:state.a-action.data}
      case 'DIVISION':
        return {...state,a:state.a%action.data}
      default:
        return state;
    }
  }