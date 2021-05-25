

const StateViewReducer=(state="home", action)=>{

    switch(action.type){
        case "all":{
            return "all";
        }
        case "remaining":{
            return "remaining";
        }
        case "home":{
            return "home";
        }
        default:{
            return state;
        }
    }
}

export default StateViewReducer;