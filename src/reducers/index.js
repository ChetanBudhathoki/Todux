import StateViewReducer from "./StateViewReducer";
import ToDoInputReducer from "./ToDoInputReducer"

import {combineReducers} from "redux";


const allReducers=combineReducers({stateview:StateViewReducer, todos:ToDoInputReducer});

export default allReducers;