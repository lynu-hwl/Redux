export default function reducer(state='WHOLE', action){
    console.log('type.js')
    switch(action.type){
        case 'WHOLE':
            return 'WHOLE'
        case 'COMPLETE':
            return 'COMPLETE'
        case 'NOCOMPLETE':
            return 'NOCOMPLETE'
        default:
            const newState = state;
            return newState
    }
}