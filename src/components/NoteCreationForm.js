import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import '../styles/NoteCreationForm.css';

function NoteCreationForm({ onFormClose, onAddNote }) {
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentTags, setCurrentTags] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleSave = () => {
    const newNote = {
      title: currentTitle,
      tags: currentTags,
      note: currentNote,
    };
    
    // Chame a função onAddNote para adicionar a nova anotação à lista
    onAddNote(newNote);

    setCurrentTitle('');
    setCurrentTags([]);
    setCurrentNote('');

    onFormClose();
  };

  return (
    <div className="note-creation-form">
      <h2>Adicionar Anotação</h2>
      <div className="form-input">
        <label>Título da Anotação</label>
        <input
          type="text"
          value={currentTitle}
          onChange={(e) => setCurrentTitle(e.target.value)}
          placeholder="Título da anotação"
        />
      </div>
      <div className="form-input">
        <label>Tags</label>
        <input
          type="text"
          value={currentTags.join(',')}
          onChange={(e) => setCurrentTags(e.target.value.split(','))}
          placeholder="Tags (separadas por vírgula)"
        />
      </div>
      <div className="form-input">
        <label>Anotação</label>
        <ReactQuill
          value={currentNote}
          onChange={setCurrentNote}
          placeholder="Digite uma nova anotação"
        />
      </div>
      <div className="form-buttons">
        <button onClick={handleSave}>Adicionar Anotação</button>
        <button onClick={onFormClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default NoteCreationForm;
