import { useState } from 'react'

import './App.css'
import Navbar from './components/private/Navbar'
import { Outlet } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'



function App() {
  

  return (
    <>
     <div className='container  mx-auto'>
      
      <PrivateRoute>
      <Navbar/>
        <Outlet/>

      </PrivateRoute>
        
     
     
     

     </div>
    
    </>
  )
}

export default App
