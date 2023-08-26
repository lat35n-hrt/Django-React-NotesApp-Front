import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function NotePage() {
    // Get the value of the dynamic parameter "id" from the URL
    const { id } = useParams();

    return (
    <div>
      <h1>Single Note {id} {NoteId}</h1>
    </div>
  );
}

export default NotePage;