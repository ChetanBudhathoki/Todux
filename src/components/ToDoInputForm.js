import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../actions/ToDoInputAction";
import { uuid } from "uuidv4";
import { homeToDo } from "../actions/ViewController";
import { allToDo } from "../actions/ViewController";
import { remainingToDo } from "../actions/ViewController";

const ToDoInputForm = () => {
  const stateview = useSelector((state) => state.stateview);
  let title = "";
  const inputHandler = (e) => {
    e.preventDefault();
    title = e.target.value;
    console.log(title);
  };
  const dispatch = useDispatch();
  const allClickHandler = (e) => {
    e.preventDefault();
    dispatch(allToDo());
  };
  const remainingHandler = (e) => {
    e.preventDefault();
    dispatch(remainingToDo());
  };
  const homeHandler = (e) => {
    e.preventDefault();
    dispatch(homeToDo());
  };
  return (
    <StyledInputForm>
      <div className="display">
        <input onChange={inputHandler} type="text" />

        {stateview === "home" ? (
          <button id="submitt"
            onClick={() => {
              dispatch(addToDo({ title, isdone: false, id: uuid() }));
            }}
          >
            Submitt
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="buttons">
        <button onClick={stateview === "all" ? homeHandler : allClickHandler}>
          {stateview === "all" ? "Home" : "All"}
        </button>
        <button onClick={remainingHandler}>Remaining</button>
      </div>
    </StyledInputForm>
  );
};

const StyledInputForm = styled.div`
  /* border: 2px solid red; */
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .display {
    /* border: 2px solid green; */
    /* height:100%; */
    width:100%;
    display:flex;
    /* flex-direction:column; */
    align-content:center;
    justify-content:center;
  }
  input{
    border: 2px solid grey;
    height:41px;
    width:38%;
    border-radius:18px;
    text-align:center;
  }
  #submitt{
    /* border:2px solid red; */
    width:11%;
    padding:0;
    margin:0;
    vertical-align:middle;
  }
  button{
    height:37px;
    width:120px;
    border:none;
    border-radius:25px;
    background-color:grey;
    color:white;
    margin:5px;
  }
  button:hover{
    background-color:whitesmoke;
    transition-duration:0.2s;
    color:black;
    cursor: pointer;
    border:1px solid grey;
  }
  textarea:focus, input:focus{
    outline: none;
}

@media only screen and (max-width:667px){
  input{
    width:70%;
    border-radius:0px;
  }
  #submitt{
    width:28%;
    margin-left:1em;
  }
}
`;
export default ToDoInputForm;
