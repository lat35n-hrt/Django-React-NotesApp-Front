import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])


  let getNotes = async () => {

    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div className='notes'>
      <div className="notes-header">
        <h2 className='notes-title'>&#9782;</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>

      <div className='notes-list'>
        {notes.map((note, index) => (
          <Link key={index} to={`/note/${note.id}`}>
            <div className="notes-list-item" >
              <h3>{note.body}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>  
  )


}

export default NotesListPage
