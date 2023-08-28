import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function NotePage() {
    // Get the value of the dynamic parameter "id" from the URL
    const { id } = useParams();

    let [note, setNote] = useState(null);

    useEffect(()=> {
        getNote();
    }, []);

    let getNote = async ()=> {
        let response = await fetch(`/api/notes/${id}`);
        let data = await response.json();
        setNote(data);
    }

    return (
    <div className='note'>
      <h1>Single Note {id}</h1>
      <textarea defaultValue={note?.body}></textarea>

    </div>
  );
}

export default NotePage;