import React, { useState } from "react";
import "./addNoteInput.css";

const AddNoteInput = ({ addNote, noteToEdit }) => {
  const [noteInput, setNoteInput] = useState("");
  const [titleInput, setTitleInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ title: titleInput, content: noteInput, reminder: null });
    setNoteInput("");
    setTitleInput("");
  };

  return (
    <div className="add-note-container">
      <form className="add-note-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <p>
          <textarea
            name="note"
            placeholder="Take a note..."
            value={noteInput}
            onChange={(e) => setNoteInput(e.target.value)}
          />
        </p>
        <button className="add-note-btn" onClick={handleSubmit}>
          +
        </button>
      </form>
    </div>
  );
};

export default AddNoteInput;
