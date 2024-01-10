import { useState } from 'react'

import './App.css'
import Navbar from './components/private/Navbar'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'



function App() {
  

  return (
    <>

      <PrivateRoute>
        <Navbar/>
        <Outlet/>
      </PrivateRoute>
    
    </>
  )
}

export default App
