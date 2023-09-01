import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [note, setNote] = useState(null);

    useEffect(()=> {
      getNote();
  }, [id]);

    let getNote = async ()=> {
      if (id === 'new') return

      try {
        let response = await fetch(`http://localhost:8000/api/notes/${id}`);
        if (response.ok) {
          let data = await response.json();
          console.log("Fetched note data:", data);
          setNote(data);
        } else {
          console.error("Error fetching note");
        }
      } catch (error) {
        console.error("Error fetching note", error);
      }
    }

    let updateNote = async () => {
      try {
        let response = await fetch(`http://localhost:8000/api/notes/${id}/update`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
        })

        if (response.ok) {
          console.log("Note updated successfully");
        } else {
          console.error("Error updating note");
        }

      } catch (error) {
        console.error("Error updating note", error);
      }
    }   

    
    let createNote = async () => {
      try {
        let response = await fetch(`http://localhost:8000/api/notes/create`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(note)
        })

        if (response.ok) {
          console.log("Note created successfully");
        } else {
          console.error("Error creating note");
        }

      } catch (error) {
        console.error("Error creating note", error);
      }
    } 


    let deleteNote = async () => {
      try {
        let response = await fetch(`http://localhost:8000/api/notes/${id}/delete`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          },
        })

        if (response.ok) {
          console.log("Note updated successfully");
        } else {
          console.error("Error updating note");
        }

      } catch (error) {
        console.error("Error updating note", error);
      }
    }  

    const handleSubmit = ()=> {
      if (id !== 'new' && note.body === '') {
        deleteNote()
      } else if (id !== 'new'){
        updateNote()
      } else if (id === 'new' && note !== null){
        createNote()
      }
      navigate('/')
    }

    return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>
        {id !== 'new' ?(
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button onClick={handleSubmit}>Done</button>
        )}
      </div>
      <h1>Single Note {id}</h1>
       <textarea 
        defaultValue={note?.body}
        onChange={(e) => {
            setNote({ ...note, 'body': e.target.value})}} 
       ></textarea>
    </div>
  );
}

export default NotePage;