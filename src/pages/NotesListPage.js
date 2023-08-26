import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  // return (
  //   <div>
  //     notes 
  //   </div>
  // )

  let getNotes = async () => {

    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    setNotes(data)
  }

  return (
    <div>
      <div className='notes-list'>
        {notes.map((note, index) => (
          <Link key={index} to={`/note/${note.id}`}>
            <h3>{note.body}</h3>
          </Link>
        ))}
      </div>
    </div>  
  )


}

export default NotesListPage
