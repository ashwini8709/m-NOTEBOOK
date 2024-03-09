import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

function Notes() {

    const context= useContext(NoteContext);
    const{notes,getAllNotes}=context;
    useEffect(()=>{
      getAllNotes();
    },[])
  return (
    <>
        <AddNote/>
    <div className="row my-4 " >
    <h2 >Your Notes</h2>

    {notes.map((note)=>{
    //    return <h2 key={index}>{note.title}</h2>;
        return <NoteItem key={note._id} note={note}/>
     })}
    
    </div>
    </>
  )
}

export default Notes
