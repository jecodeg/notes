import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';


const Note = ({ id, text, date, handleDeleteNote, handleUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedText, setUpdatedText] = useState(text);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleUpdateClick = () => {
    handleUpdate(id, updatedText);
    setEditMode(false);
  };

  const handleChange = (event) => {
    setUpdatedText(event.target.value);
  };

  return (
    <div className="note">
      {!editMode ? (
        <>
          <span>{text}</span>
          <div className="note-footer">
            <small>{date}</small>
            <button onClick={handleEditClick} className="save">Edit</button>
            <MdDeleteForever onClick={() => handleDeleteNote(id)} className="delete-icon" size="1.3em" />
          </div>
        </>
      ) : (
        <div className="update-note">
          <textarea
            rows="8"
            cols="10"
            value={updatedText}
            onChange={handleChange}
          ></textarea>
          <button className='save' onClick={handleUpdateClick}>Update</button>
          <button className='save' onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Note;