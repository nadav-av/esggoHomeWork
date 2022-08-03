const express = require("express");
const router = express.Router();
const NotesManager = require("../services/notesManager");

router.get("/", async (req, res) => {
  const notes = await NotesManager.getNotes();
  if (notes) {
    res.status(200).json(notes);
  } else {
    res.status(500).json({ message: "Error while getting notes" });
  }
});

router.post("/", async (req, res) => {
  const note = await NotesManager.addNote(req.body);
  if (note) {
    res.status(200).json(note);
  } else {
    res.status(500).json({ message: "Error while adding note" });
  }
});

router.put("/", async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const content = req.body.content;
  const reminderDate = req.body.reminderDate;
  const reminderHour = req.body.reminderHour;
  const note = await NotesManager.updateNote(
    id,
    title,
    content,
    reminderDate,
    reminderHour
  );

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(500).json({ message: "Error while updating note" });
  }
});

router.delete("/", async (req, res) => {
  const id = req.body.id;
  const deleted = await NotesManager.deleteNote(id);
  if (deleted) {
    res.status(200).json({ message: "Note deleted" });
  } else {
    res.status(500).json({ message: "Error while deleting note" });
  }
});

module.exports = router;
