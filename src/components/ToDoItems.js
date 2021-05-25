import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../actions/ToDoInputAction";
import {isDoneToDo} from "../actions/ToDoInputAction";
const ToDoItems = ({ title, id, isdone }) => {
  const dispatch = useDispatch();
  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteToDo({ id }));
  };
  const onDone=(e)=>{
    e.preventDefault();
    dispatch(isDoneToDo({id}));
  }
  return (
    <Itembox>
      {isdone?
      <div style={{textDecoration:"line-through"}} className="item">
        {title}
      </div>:
      <div  className="item">
      {title}
    </div>
}
      <button id="delete" onClick={onDelete}>Delete</button>
      <button onClick={onDone}>Done</button>

      {/* <a href="https://facebook.com">facebook</a> */}
    </Itembox>
  );
};
const Itembox = styled.div`
  /* margin-top:50px; */
  /* border: 2px solid orange; */
  text-align: center;
  background-color:wheat;
  width:65%;
  /* border-radius:18px; */
  margin:0 auto;
  margin-bottom:10px;
  /* justify-content:center; */

  .item {
    display: inline-block;
    /* border: 1px solid whitesmoke; */
    border-radius:14px;
    width: 55%;
    height: 40px;
    color:black;
    /* text-decoration: line-through; */
  }
  button {
    height: 35px;
    width: 13%;
    /* border-radius:25px; */
    margin-left: 10px;
    vertical-align:middle;
    margin-top:7px;
    border:none;
    background-color:rgba(0,128,128,0.7);
    opacity:0.7;
    color:black;
  }
  button:hover{
    cursor: pointer;
    /* border:1px solid blue; */
    background-color:ghostwhite;
    transition-duration:0.3s;
  }
  #delete{
    color:black;
    background-color:#ffb686;
  }

  @media only screen and (max-width:667px){
    width:100%;
     .item{
       width:60%;
       /* border:solid; */
       text-overflow:ellipsis;
     }
     
     button{
       /* width:20%; */
     }
  }
`;

export default ToDoItems;
