
const initialState = [
    {
      id:1,
      content:'刷牙',
      isComplete:true
    },
    {
      id:2,
      content:'洗脸',
      isComplete:false
    },
    {
      id:3,
      content:'睡觉',
      isComplete:false
    }
  ]
  
  export default function reducer(state=initialState, action){
    console.log('todos.js')
    switch(action.type){
        case 'ADD':
            return [
                {
                    id:state.reduce((previousValue,currentValue)=>{
                        if(previousValue.id<currentValue.id){
                            previousValue.id=currentValue.id
                        }
                        return previousValue
                    }).id+1,
                    content:action.content,
                    isComplete:false
                },
                ...state
            ]
        case 'CHANGE':
            return state.map((item)=>{
                if(item.id === action.id){
                    item.content=action.content
                }
                return item
            })
        case 'DELETE':
            return state.filter((item)=>{
                return item.id!==action.id
            })
        case 'ISCOMPLETE':
            return state.map((item)=>{
                if(item.id === action.id){
                    item.isComplete=!item.isComplete
                }
                return item
            })
        default:
            return state;
    }
  }