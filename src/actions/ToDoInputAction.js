
export const addToDo=(data)=>{
    return{
        type:'add',
        payload:data,
    }
}

export const deleteToDo=(data)=>{
    console.log(data);
    return{
        type:"delete",
        payload:data,
    }
}
export const isDoneToDo=(data)=>{
    return{
        type:"isdone",
        payload:data,
    }
}
