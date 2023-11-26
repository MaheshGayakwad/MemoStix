import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await axios.get("https://memostix.onrender.com/get");
      setNotes(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  async function addNote(newNote) {
    try {
      const response = await axios.post('https://memostix.onrender.com/add', { notes: newNote });
      fetchData();
    } catch (error) {
      console.error("Error adding note:", error);
    }
  }

  async function deleteNote(id) {
    try {
      const response = await axios.delete("https://memostix.onrender.com/deleteRoute/" + id);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
    fetchData();
  }

  async function handleUpdate(id) {
    try {
      const updated = await axios.put("https://memostix.onrender.com/update/" + id);
      fetchData();
    } catch (error) {
      console.error("Error updating note:", error);
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={noteItem._id}
          title={noteItem.title}
          cross={noteItem.cross}
          content={noteItem.content}
          onDelete={deleteNote}
          updateClick={handleUpdate}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
