import React, { useState } from "react";
import "./note.css";
import GenericModal from "./../GenericModal/GenericModal";
import ReminderForm from "./../ReminderForm/ReminderForm";

const Note = ({ id, title, content, deleteNote }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {isModalOpen === true ? (
        <GenericModal
          open={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
          content={<ReminderForm />}
        />
      ) : (
        <div className="note">
          <h2 onInput={console.log("aa")}>{title}</h2>
          <p>{content}</p>
          <button className="delete-note-btn" onClick={() => deleteNote(id)}>
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button
            className="reminder-note-btn"
            onClick={() => setIsModalOpen(true)}
          >
            <i className="fa-solid fa-clock"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Note;
