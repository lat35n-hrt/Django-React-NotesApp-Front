import React, { useState, useEffect } from 'react'

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
}

export default NotesListPage
