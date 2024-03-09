import React, { useState } from "react";
import NoteContext from "./NoteContext";
const NoteState=(props)=>{
  const host="http://localhost:5000";
    const notesInitial=[]
    const [notes,setNotes]=useState(notesInitial);
    // const getAllNotes=()=>{
      //GET ALL NOTES
      const getAllNotes=async()=>{
        const response= await fetch(`${host}/api/notes/fetchAllNotes`,{
          method:'GET',
          headers:{
            'Content-Type': 'application/json',
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTAzMGJiMzcwYjRjNmRhNWUxOTQ5In0sImlhdCI6MTcwOTc2OTUxMX0.N892KdKbxSlz6vlXuu5Us35d5_buSw5yeTPO1UV1-Cs"
          },
        });
        const json= await response.json();
        console.log(json);
        setNotes(json)

      }
    //Add a note
        const addNote=async(title,description,tag)=>{
          const response= await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers:{
              'Content-Type': 'application/json',
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTAzMGJiMzcwYjRjNmRhNWUxOTQ5In0sImlhdCI6MTcwOTc2OTUxMX0.N892KdKbxSlz6vlXuu5Us35d5_buSw5yeTPO1UV1-Cs"
            },
            body:JSON.stringify({title,description,tag})
          });
        //  const json= response.json();
          console.log("Adding a new note");


          //TODO: API CALL
          let note= {
            "_id": "65ea173f194dwert1adjrjereti775381115",
            "user": "65e9030bb370ghjgjhgjhb4c6da5e1949",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-07T19:36:31.480Z",
            "__v": 0
          }
            setNotes(notes.concat(note))
        }


    //Delete a note
    const deleteNote=(id)=>{
          console.log("deleting a note by id" +id);
           //TODO: API CALL
          const newNotes= notes.filter((note)=>{
            return note._id!==id;
          })
          setNotes(newNotes);
    }



    //edit a note

    //ApI calls
      const editNote =async(id,title,description,tag)=>{
            const response= await fetch(`${host}/api/notes/updatenote/${id}`,{
              method:'POST',
              headers:{
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVlOTAzMGJiMzcwYjRjNmRhNWUxOTQ5In0sImlhdCI6MTcwOTc2OTUxMX0.N892KdKbxSlz6vlXuu5Us35d5_buSw5yeTPO1UV1-Cs"
              },
              body:JSON.stringify({title,description,tag})
            });
           const json= response.json();
          //logic to edit note in client side 
   
        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element.id===id){
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
        }  
    }






return (
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getAllNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}
export default NoteState;