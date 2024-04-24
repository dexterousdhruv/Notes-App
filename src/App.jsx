import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import SearchBox from "./components/SearchBox";

function App() {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'))

  const [notes, setNotes] = useState(savedNotes ?? [
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "18/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "18/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "1/03/2024",
    },
    {
      id: nanoid(),
      text: "This is my fourth note!",
      date: "18/03/2024",
    },
  ])
  

  const [searchValue, setSearchValue] = useState("");

  const handleToggleClick = () => {
    document.body.classList.toggle("dark-mode");
  };

  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes))
  }, [notes])

  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("in"),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => id !== note.id);
    setNotes(newNotes);
  };


  return (
    <div className="container">
      <div className="header">
        <h1>Notes</h1>
        <button className="save" onClick={handleToggleClick}>
          Toggle Dark Mode
        </button>
      </div>
      <SearchBox handleNoteSearch={setSearchValue} />
      <NotesList
        notes={notes.filter(note => note.text.includes(searchValue))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
