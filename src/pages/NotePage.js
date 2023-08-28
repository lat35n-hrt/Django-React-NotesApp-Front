import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

function NotePage() {
    // Get the value of the dynamic parameter "id" from the URL
    const { id } = useParams();

    let [note, setNote] = useState(null);

    useEffect(()=> {
        getNote();
    }, [id]);

    let getNote = async ()=> {
        let response = await fetch(`/api/notes/${id}`);
        let data = await response.json();
        setNote(data);
    }

    let updateNote = async () => {
      fetch(`/api/notes/${id}/update/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
      })
    }  

    return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>

      </div>
      <h1>Single Note {id}</h1>
      <textarea onChange={(e) => {setNote({ ...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>

    </div>
  );
}

export default NotePage;