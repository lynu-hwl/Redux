
const initialState = {
  wares:[
    {
      name:'MAC',
      price:3000,
      num:0
    },
    {
      name:'联想',
      price:2000,
      num:0
    },
    {
      name:'小米',
      price:2500,
      num:0
    }
  ],
  total:0,
  totalPrice:0
}

export default function reducer(state=initialState, action){

  switch(action.type){
    case 'REDUCE':
      return {
        wares:state.wares.map((item,index)=>{
          return index===action.index?{...item,num:--item.num}:item
        }),
        total:state.total-1,
        totalPrice:state.totalPrice - state.wares[action.index].price
      }
    case 'ADD':
      return {
        wares:state.wares.map((item,index)=>{
          return index===action.index?{...item,num:++item.num}:item
        }),
        total:state.total+1,
        totalPrice:state.totalPrice + state.wares[action.index].price
      }
    default:
      return state;
  }
}