const { Notes } = require("../db/models");

class NotesManager {
  async getNotes() {
    return await Notes.findAll();
  }

  async addNote(id, title, content) {
    const note = await Notes.create(
      {
        id,
        title,
        content,
        reminderDate: null,
        reminderHour: null,
      },
      {
        fields: ["id", "title", "content", "reminderDate", "reminderHour"],
      }
    );
    return note;
  }

  async updateNote(id, title, content, reminderDate, reminderHour) {
    const note = await Notes.findOne({ where: { id } });
    if (note) {
      note.title = title;
      note.content = content;
      note.reminderDate = reminderDate;
      note.reminderHour = reminderHour;
      await note.save();
      return note;
    } else {
      return null;
    }
  }

  async deleteNote(id) {
    const note = await Notes.findOne({ where: { id } });
    if (note) {
      await note.destroy();
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new NotesManager();
