import React, { useState } from 'react'
import {  FaBars,FaUser} from 'react-icons/fa'

const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function handleClick(){
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <>
    
    
    <div className='flex'>
       <div className='z-50 bg-blue-950 w-full'>
            <div className=' p-2 flex items-center gap-4 '>
            <FaBars 
            onClick={handleClick}
            className='text-white text-2xl hover:scale-110'/>
                <div className='text-white text-xl'>Home
                </div>
            
            
            </div>
       </div>
    </div>

    <nav 
     className={`w-80 h-screen flex flex-col bg-blue-300 absolute           transition-transform transform duration-300 top-0 z-20 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
       
        <div className='bg-blue-300 flex items-center p-4 mt-10'>
            <img x
            className='w-20 h-20 rounded-full bg-blue-950'
            src="" alt="" />
            <div className='pl-2'>
                <strong> Vitthal N. Sawant</strong>
                <h2>
                
                    Electronics Mechanic
                </h2>
                <h3>
                    2022-23
                </h3>
            </div>
        
        </div>
            <h1 className='text-blue-950 border w-full flex items-center justify-center gap-2 bg-blue-200 py-2 font-semibold hover:underline'>
                 <FaUser/> View Profile
            </h1>
    </nav>
    <div 
    onClick={handleClick}
    className={`${isMenuOpen ? 'bg-black transition-all duration-300 opacity-50 absolute right-0 -inset-y-0 h-screen w-full z-10' : ""}  `}>

    </div>
 
       
    
    
    </>
  )
}

export default Navbar