import styled from "styled-components";

const AllToDoItems = ({ title, id, isdone }) => {
 

  return (
    <Itembox>
      
        <div className="item">{title}</div>
      
      

      {/* <a href="https://facebook.com">facebook</a> */}
    </Itembox>
  );
};
const Itembox = styled.div`
  /* margin-top:50px; */
  
  text-align: center;
  background-color:wheat;
  width:65%;
  margin:0 auto;
  margin-bottom:2px;

  .item {
    display: inline-block;
    color:black;
    /* width: 500px; */
    height: 40px;
    /* border: 1px solid whitesmoke; */
    border-radius:14px;
    /* text-decoration: line-through; */
  }
  button {
    height: 35px;
    width: 70px;
    margin-left: 10px;
  }

  @media only screen and (max-width:767px){
    width:100%;
  }
`;

export default AllToDoItems;
