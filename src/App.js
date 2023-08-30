import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteCreationForm from './components/NoteCreationForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [showNoteForm, setShowNoteForm] = useState(false);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleFormClose = () => {
    setShowNoteForm(false);
  };

  return (
    <div className="App">
      <h1>Aplicativo de Anotações</h1>
      <div className="options">
        {/* ...seu código de ordenação e filtragem... */}
      </div>
      <NoteList notes={notes} onFormOpen={() => setShowNoteForm(true)} />
      {showNoteForm && (
        <NoteCreationForm
          onFormClose={handleFormClose}
          onAddNote={handleAddNote}
        />
      )}
    </div>
  );
}

export default App;
