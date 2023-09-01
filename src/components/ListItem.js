import React from "react"
import { Link } from 'react-router-dom'

let getTitle = (note) => {
    
    let title = note.body.split('\n')[0]
    if (title.length > 45) {
        return title.slice(0, 45)
    }
    return title
}

const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item" >
                <h3>TEST</h3>
                <h3>{getTitle(note)}</h3>
                <p><span>{note.updated}</span></p>
            </div>
        </Link>
    )
}

export default ListItem
