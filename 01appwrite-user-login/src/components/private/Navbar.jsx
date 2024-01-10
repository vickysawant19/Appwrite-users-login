import React, { useState } from 'react'
import {  FaBars,FaHome,FaSignOutAlt,FaTimes,FaUser} from 'react-icons/fa'
import { NavLink,Navigate} from 'react-router-dom'
import { useActivePageName, useAuth } from '../../utils/AuthContext'


const Navbar = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [pageStatus , setPageStatus] = useState('')

    const {user,logoutUser} = useAuth()

    const {activePageName} = useActivePageName()

    function handleClick(){
        setIsMenuOpen(!isMenuOpen)

    }
    function handleLogout(){
      logoutUser()
    }

  return (
    <>
    <div className='flex items-center w-full'>
       <div className=' flex z-50 bg-blue-900 w-full h-14 '>
            <div className='flex items-center gap-3'>
                  <div className=' pl-3'>
                  {isMenuOpen ? <FaTimes 
                    onClick={handleClick}
                    className='text-white  text-2xl transition-all transform duration-300 opacity-70 '/>:
                    <FaBars 
                    onClick={handleClick}
                    className='text-white text-2xl transition-all transform duration-300 opacity-70'/>}
                  </div>
                 <div className='text-white text-xl'> {activePageName}
                  </div>        
             </div>
         </div>
    </div>

    <nav 
     className={`w-80 h-screen flex flex-col bg-blue-300 absolute transition-transform transform duration-300 top-0 z-20 ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
      <div className='bg-blue-200 flex items-center  justify-between px-4 pt-4 mt-12 '>
            <img
            className='w-20 h-20 rounded-full bg-white object-contain'
            src="https://avatars.githubusercontent.com/u/68048696?v=4" alt="" />
            <div className='w-full pl-2'>
                <strong className='uppercase'>{user.name}</strong>
                <h2 className='text-gray-700'>
                    Electronics Mechanic
                </h2>
                <h3 className='text-gray-700'>
                    2022-23
                </h3>
            </div>
               
       </div>
      
       <NavLink    
          onClick={()=> {setIsMenuOpen(false)}}
          className={({isActive}) => {
            if(isActive ) {
              return 'w-full bg-blue-200 py-2 flex items-center justify-center gap-2 font-semibold text-blue-600'}
              
              return 'w-full bg-blue-200 py-2 flex items-center justify-center gap-2 font-semibold text-blue-950'
            } }
          to={'Profile'}>
          <FaUser/> View Profile

        </NavLink>
                
                  
        <NavLink 
        onClick={()=> {setIsMenuOpen(false)}}
        className={({isActive}) => {
        if(isActive ) {
          
          return 'border pl-4 py-2 flex items-center gap-2 font-semibold text-blue-600'}
          
          return 'border pl-4 py-2 flex items-center gap-2 font-semibold'
        } }
        
        to={'/'}>
        <FaHome/> Home

        </NavLink>
                

        <div 
        onClick={handleLogout}
        className='w-full text-center border py-4 absolute bottom-0 hover:bg-blue-400 hover:text-white hover:cursor-pointer flex justify-center items-center gap-2'>

          
          <FaSignOutAlt/>Logout
          
        </div>
        
    </nav>
    <div 
    onClick={handleClick}
    className={`${isMenuOpen ? 'bg-black transition-all duration-300 opacity-60 absolute right-0 -inset-y-0 h-screen w-full z-10' : " "}  `}>
    </div>
 
    </>
  )
}

export default Navbar