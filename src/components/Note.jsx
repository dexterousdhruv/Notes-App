import React from 'react'
import deleteIcon from '../assets/delete-icon.png'



const Note = ({ text, id, date, handleDeleteNote }) => {
  const handleDeleteClick = () => {
    handleDeleteNote(id)
    // console.log(id)
  }


  return (
    <div className='note'>
      <span>{text}</span>
      <div className="note-footer">
        <small className="date">{date}</small>
        <button className='delete-icon' onClick={handleDeleteClick} >
          <img src={deleteIcon} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Note