
import "./components/ToDoInputForm"
import ToDoInputForm from './components/ToDoInputForm';
import ToDoItemsLists from "./components/ToDoItemsList";
import "../src/styles/globalstyle.css";
function App() {
  return (
    <div className="App">
     <ToDoInputForm/>
     <ToDoItemsLists/>
    </div>
  );
}

export default App;
