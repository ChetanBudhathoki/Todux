import { useSelector } from "react-redux";

import ToDoItems from "./ToDoItems";
import AllToDoItems from "../components/AllToDoItems";
const ToDoItemsList = () => {
  const todos = useSelector((state) => state.todos);
  const stateview = useSelector((state) => state.stateview);
  console.log(typeof stateview);
  console.log(todos);

  return (
    <div className="todoitemslist">
      {stateview === "home"
        ? todos.map((state) => {
            return (
              <ToDoItems
                todos={todos}
                title={state.title}
                key={state.id}
                id={state.id}
                isdone={state.isdone}
              />
            );
          })
        : stateview === "remaining"
        ? todos.map((state) => {
          if(!(state.isdone))
            return (
              <AllToDoItems
                todos={todos}
                title={state.title}
                key={state.id}
                id={state.id}
                isdone={state.isdone}
              />
            );
            else{
              return "";
            }
          })
        : todos.map((state) => {
            return (
              <AllToDoItems
                todos={todos}
                title={state.title}
                key={state.id}
                id={state.id}
                isdone={state.isdone}
              />
            );
          })}
    </div>
  );
};

export default ToDoItemsList;
