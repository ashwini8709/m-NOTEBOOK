import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
function NoteItem(props) {
  const context= useContext(NoteContext);
  const{deleteNote}=context;
  const { note } = props;
  return (
    <div className='col-md-3'>
      {/* <h3> <ul>
        <li><h3>{note.title}</h3></li>
        <li><h4>{note.description}</h4></li>
        <br />
      </ul></h3> */}
      <div className="card  my-3">
        <div className="card-body">
        <div className='d-flex align-items-center'>
        <h5 className='card-title'>{note.title}</h5>
          <i className="fa-solid fa-trash mx-3"onClick={()=>{deleteNote(note._id)}}></i>
          <i className="fa-solid fa-pen-to-square  mx-3"></i>
        </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>

    </div>
  )
}

export default NoteItem;
