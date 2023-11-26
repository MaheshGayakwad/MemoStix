import React, { useState } from "react";
import { Button } from 'antd';
import {  PlusOutlined } from "@ant-design/icons"

function CreateArea(props) {
  const [note, setNote] = useState({
    _id : "",
    title: "",
    content: ""
  });

  const [clicked , setClicked] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
   
    setNote({
      title: "",
      content: ""
    });

    event.preventDefault();
  }

  function textClick(){
    setClicked(true);
  }


  return (
    <div>
      <form className="create-note">

      
        {clicked ? <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          
        /> : null}


        <textarea
          name="content"
          onChange={handleChange}
          onClick={textClick}
          value={note.content}
          placeholder="Take a note..."
          rows= {clicked ? 3 : 1}
        />
       
       
      {clicked ?  <Button   style={{ fontSize: '16px' }}  onClick={submitNote} icon = {<PlusOutlined></PlusOutlined>} ></Button> : null}
       
      </form>
    </div>
  );
}

export default CreateArea;
