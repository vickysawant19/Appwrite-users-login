import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
       <div className='w-full h-14 bg-blue-900 flex items-center justify-between'>
    <h1 className='text-center text-white text-xl ml-4'>
        Welcome To Our website
    </h1>
    <Link 
    to={'login'} className='mr-4 border p-1 rounded-xl my-2 text-white px-2 hover:bg-blue-900 '>Login </Link>
</div>
        welcome Page here
    </div>
    
  )
}

export default Welcome