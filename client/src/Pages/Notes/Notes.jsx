import React, { useState } from "react";
import "./notes.css";
import AddNoteInput from "../../Components/AddNoteInput/AddNoteInput";
import Note from "../../Components/Note/Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note, index) => index !== id));
  };

  console.log(notes);
  return (
    <div className="notes-page-container">
      <AddNoteInput addNote={addNote} />
      <div className="notes-container">
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            reminder={note.reminder}
            content={note.content}
            deleteNote={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default Notes;
