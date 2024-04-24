import React, { useState } from "react";


const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("")
  const characterRemaining = 200 - noteText.length

  const handleChange = (e) => {
    if(e.target.value.length < 201)
    setNoteText(e.target.value)
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0 ) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }
   
  return (
    <div className="note new">
      <textarea
        name=""
        id=""
        value={noteText}
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small> {characterRemaining} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
}

export default AddNote  