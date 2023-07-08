import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from'./components/NotesList';
import Header from './components/header'

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "27/11/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "7/4/2023"
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "4/7/2023"
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "7/7/2023"
    },
    {
      id: nanoid(),
      text: "This is my fifth note!",
      date: "7/7/2023"
    }
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleUpdate = (id, newText) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNotes(updatedNotes);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleUpdate={handleUpdate}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;