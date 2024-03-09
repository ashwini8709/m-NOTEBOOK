import React from 'react'
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';

function Layout() {
  return (
   <>
    <Navbar/>
    <div  className="container " style={{ width: '70vw'}} >
    <Outlet/>
    </div>
   
   
   </>
  )
}

export default Layout
