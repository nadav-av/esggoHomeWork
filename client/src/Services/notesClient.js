class NotesClient {
  constructor() {
    this.url = process.env.REACT_APP_SERVER_URL || "http://localhost:3042";
  }

  async getNotes() {
    const response = await fetch(`${this.url}/notes`);
    return await response.json();
  }
  async addNote(id, title, content) {
    const response = await fetch(`${this.url}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content }),
    });
    return await response.json();
  }

  async updateNote(id, title, content, reminderDate, reminderHour) {
    const response = await fetch(`${this.url}/notes`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, title, content, reminderDate, reminderHour }),
    });
    return await response.json();
  }
}

export default new NotesClient();
