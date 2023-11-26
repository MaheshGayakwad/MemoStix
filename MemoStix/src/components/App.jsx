import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


// Add a global unhandled rejection handler
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application-specific logging, re-throwing, or any other handling here
});


function App() {
  const [notes, setNotes] = useState([]);

  
  

  useEffect(() => {
    fetchData();
  }, []); 


  const fetchData = async () => {
    console.log(1);
    try {
      const data = await axios.get("https://memostix.onrender.com/get");
      setNotes(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  


  function addNote(newNote) {
  
 
  const postMount = async () => {
      
    try {
      // Make a request using Axios
      const response = await axios.post('https://memostix.onrender.com/add' , {notes:newNote});
      fetchData();
    } catch (error) {
      // Handle errors
      console.error("Error fetching data:", error);
    }
  };
  postMount();

  

}

  async function deleteNote(id) {
   
   
     try {
      const response =  await axios.delete("hhttps://memostix.onrender.com/deleteRoute/" + id);
    
       } catch (error) {
        console.error("Error fetching data:", error);
      }

      fetchData();

  }


  async function handleUpdate(id){

        
       try {
        const updated = await axios.put("https://memostix.onrender.com/update/" + id );
        fetchData();
       } catch (error) {
        console.error("Error fetching data:", error);
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
