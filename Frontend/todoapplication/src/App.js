import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  // Declare API_URL as a class field
  API_URL = "http://localhost:5038/";

  componentDidMount() {
    this.refreshNotes();
  }

  async refreshNotes() {
    try {
      const response = await fetch(this.API_URL + "api/getnotes");
      if (!response.ok) {
        throw new Error('Error fetching notes');
      }
      const data = await response.json();
      this.setState({ notes: data });
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }

  addClick = async () => {
    try {
      const newNotes = document.getElementById("newNotes").value;
      const data = new FormData();
      data.append("newNotes", newNotes);

      const response = await fetch(this.API_URL + "api/addNotes", {
        method: "POST",
        body: data
      });
      if (!response.ok) {
        throw new Error('Error adding notes');
      }
      const result = await response.json();
      alert(result);
      this.refreshNotes();
    } catch (error) {
      console.error('Error adding notes:', error);
    }
  }

  deleteClick = async (id) => {
    try {
      const response = await fetch(`${this.API_URL}api/deletenotes?id=${id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        throw new Error('Error deleting note');
      }
      const result = await response.json();
      alert(result);
      this.refreshNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  }

  render() {
    const { notes } = this.state;
    return (
      <div className="App">
        <h2>ToDo Application</h2>
        <input id="newNotes" />&nbsp;
        <button onClick={this.addClick}>Add Notes</button>

        {notes.map(note => (
          <p key={note.id}>
            <b>* {note.description}</b>&nbsp;
            <button onClick={() => this.deleteClick(note.id)}>Delete Notes</button>
          </p>
        ))}
      </div>
    );
  }
}

export default App;
