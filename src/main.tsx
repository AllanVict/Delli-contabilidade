import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from "./pages/Main";
import Contact from "./pages/Contact"
import { PanelControl } from './pages/PanelControl';

const router = createBrowserRouter([
  {
    //path: "/",
    //element: <Main/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path:"/",
    element: <PanelControl/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
