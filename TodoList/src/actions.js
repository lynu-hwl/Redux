import $ from 'jquery'

export const add = (content)=>{
    return {type:'ADD',content}
}

export const changeContent = (id,content)=>{
    return {type:'CHANGE',id,content}
}

export const deleteTodo=(id)=>{
    return {type:'DELETE',id}
}

export const changeIsComplete=(id)=>{
    return {type:'ISCOMPLETE',id}
}

export const whole=()=>{
    return {type:'WHOLE'}
}

export const complete=()=>{
    return {type:'COMPLETE'}
}

export const noComplete=()=>{
    return {type:'NOCOMPLETE'}
}