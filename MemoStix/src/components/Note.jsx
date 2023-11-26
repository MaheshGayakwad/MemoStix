import React from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


function Note(props) {
 
  

  const styling =  props.cross ? {textDecoration : "line-through"} : {textDecoration : "none"};

  function handleClick() {
    props.onDelete(props.id);
  }


  

return (
    <div className="note">
      <h1 style={styling}>{props.title}</h1>
      <p style={styling} >{props.content}</p>
      
      <button onClick={handleClick}>Delete</button>
      <button onClick={()=>props.updateClick(props.id)}>

        {props.cross ? "O" : "X" }

      </button>
    </div>
  );
}

export default Note;
