import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortailSurLesVoyages from './pages/PortailSurLesVoyages';

const router = createBrowserRouter([
  {
    path: "",element : < PortailSurLesVoyages/>
  },
  {
    path: "/**",element : < PortailSurLesVoyages/>
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)