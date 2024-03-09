import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import NoteState from "./context/notes/NoteState.jsx";
import Alert from "./components/Alert.jsx";
import App from "./App.jsx";
// const router=createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "home",
//         element: <Home/>
//       },{
//         path: "about",
//         element: <About/>
//       }
//     ]
//   }
// ])

// Another way to create Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
   
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <NoteState>
  <React.StrictMode>
   <div>
   <RouterProvider router={router} />
  
   </div>
    
  </React.StrictMode>
  </NoteState>
);
