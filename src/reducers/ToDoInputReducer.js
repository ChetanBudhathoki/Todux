const todoinputreducer = (state = [], action) => {
  switch (action.type) {
    case "add": {
      const todoslist = [action.payload, ...state];
      return todoslist;
    }
    case "delete": {
      const todoslist = [...state];
      const finaltodolist = todoslist.filter((todo) => {
        return todo.id !== action.payload.id;
      });
      return finaltodolist;
    }
    case "isdone": {
      const todoslist = [...state];
      todoslist.forEach((todo) => {
        if (todo.id === action.payload.id) {
          let a = todo.isdone;
          todo.isdone =! a;
        }
      });
    return todoslist;
    }
    // case "all":{
    //     const todoslist=[...state];
    //     todoslist.forEach((todo)=>{
    //         todo.isdone=false;
    //     })
    //     return todoslist;
    // }
    // case "remaining":{
    //     const todoslist=[...state];
    //     todoslist.filter((todo)=>{
    //         return todo.isdone===true;
    //     })
    //     return todoslist;
    // }
    default:
      return state;
  }
};

export default todoinputreducer;
