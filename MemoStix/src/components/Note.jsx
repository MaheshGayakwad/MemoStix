import React from "react";
import { Button } from 'antd';
import { DeleteFilled  , StopOutlined , CheckCircleOutlined  } from "@ant-design/icons"


function Note(props) {
 
  

  const styling =  props.cross ? {textDecoration : "line-through"} : {textDecoration : "none"};

  function handleClick() {
    props.onDelete(props.id);
  }


  

return (
    <div className="note">
      <h1 style={styling}>{props.title}</h1>
      <p style={styling} >{props.content}</p>
      
      <Button  onClick={handleClick} icon = {<DeleteFilled />} ></Button>
      <Button  onClick={()=>props.updateClick(props.id) } >

        {props.cross ? <StopOutlined></StopOutlined> : <CheckCircleOutlined></CheckCircleOutlined> }

      </Button>
    </div>
  );
}

export default Note;
