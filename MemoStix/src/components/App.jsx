import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';



function App() {
  const [notes, setNotes] = useState([]);

  
  

  useEffect(() => {
    fetchData();
  }, []); 


  const fetchData = async () => {
    console.log(1);
    try {
      const data = await axios.get("http://localhost:3000/get");
      setNotes(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  


  function addNote(newNote) {
  
 
  const postMount = async () => {
      
    try {
      // Make a request using Axios
      const response = await axios.post('http://localhost:3000/add' , {notes:newNote});
      fetchData();
    } catch (error) {
      // Handle errors
      console.log(error);
    }
  };
  postMount();

  

}

  async function deleteNote(id) {
   
   
     try {
      const response =  await axios.delete("http://localhost:3000/deleteRoute/" + id);
    
       } catch (error) {
        console.log(error);
      }

      fetchData();

  }


  async function handleUpdate(id){

        
       try {
        const updated = await axios.put("http://localhost:3000/update/" + id );
        fetchData();
       } catch (error) {
        console.log(error);
       }

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={noteItem._id}
            title={noteItem.title}
            cross = {noteItem.cross}
            content={noteItem.content}
            onDelete={deleteNote}
            updateClick = {handleUpdate}
             />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
