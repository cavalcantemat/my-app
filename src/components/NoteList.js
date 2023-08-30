import React from 'react';
import DOMPurify from 'dompurify';
import '../styles/NoteList.css';

function NoteList({ notes, onFormOpen }) {
  return (
    <div className="note-list">
      <h2>Lista de Anotações</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <strong>{note.title}</strong>: <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(note.note) }} />
          </li>
        ))}
      </ul>
      <button onClick={onFormOpen}>Adicionar Anotação</button>
    </div>
  );
}

export default NoteList;
