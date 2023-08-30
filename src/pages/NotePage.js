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
      fetch(`http://localhost:8000/api/notes/${id}/update/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }   


    const handleSubmit = ()=> {
      updateNote()
      navigate('/')
    }

    return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit}/>
        </h3>

      </div>
      <h1>Single Note {id}</h1>
       <textarea onChange={(e) => {setNote({ ...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  );
}

export default NotePage;