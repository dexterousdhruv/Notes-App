import React from 'react'
import searchIcon from '../assets/search.png'

const style = {
  width: '16px',
  marginRight: '5px'
}



const SearchBox = ({ handleNoteSearch }) => {
 
  return (
    <div className='search'>
      <img style={style} src={searchIcon} alt="" />
      <input
        type="text"
        placeholder='Type to search...'
        onChange={(e) => handleNoteSearch(e.target.value)}
      />
    </div>
  )
}

export default SearchBox