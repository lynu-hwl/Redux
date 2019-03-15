export default function reducer(state={r:245,g:245,b:245}, action){
  switch(action.type){
    case 'R':
      return {...state,r:action.value}
    case 'G':
      return {...state,g:action.value}
    case 'B':
      return {...state,b:action.value}
    case 'REDUCE-R':
      return {...state,r:state.r - action.value}
    case 'REDUCE-G':
      return {...state,g:state.g - action.value}
    case 'REDUCE-B':
      return {...state,b:state.b - action.value}
    case 'ADD-R':
      return {...state,r:state.r + Number(action.value)}
    case 'ADD-G':
      return {...state,g:state.g + Number(action.value)}
    case 'ADD-B':
      return {...state,b:state.b + Number(action.value)}
    default:
      return state;
  }
}