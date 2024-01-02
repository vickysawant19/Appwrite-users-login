import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container  mx-auto'>
     <Navbar/>
      <Outlet/>
     

     </div>
    
    </>
  )
}

export default App
