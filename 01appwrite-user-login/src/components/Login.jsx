import React, { useEffect, useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { account } from '../appwrite/appwriteConfig'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'

const Login = () => {

      const [viewEye, setViewEye] = useState(false)
      const [formData , setFormData] = useState({
        email: '',
        password: ''
      })

       const navigate = useNavigate()
        const {user, loginUser } = useAuth()

      useEffect(()=>{ 
        if(user){
          navigate('/')
        }
      },[])
      
      function handleEye(){
        setViewEye(!viewEye)
      }

      function handleChange(e){
        
        setFormData((prev) => ({ ...prev,
          [e.target.name]: e.target.value
        }))
        
      }
    
        
        function handleFormSubmit(e){
          e.preventDefault()
        
          loginUser(formData)

          setFormData({
            email:"",
            password:""
          })
          
      }

  return (
    <div>
       <div className='w-full h-14 bg-blue-900 flex items-center justify-between'>
    <h1 className='text-center text-xl text-white ml-4'>
        Welcome To Our website
    </h1>
    <Link 
    to={'/'} className='mr-4 border p-1 rounded-xl my-2 text-white px-2 hover:bg-blue-900 '>Home</Link>

   </div>
      
    <div className=' flex items-start justify-center  w-full mt-10'>
        <div className='bg-blue-300 w-96 rounded shadow-xl'>
          <div className=' text-center font-semibold text-xl my-2'>
               Login
          </div>
          <div className='p-2 border-t'>
             <form 
             className='flex flex-col' 
             onSubmit={handleFormSubmit}
             >
              <label
              className='py-2'
              htmlFor="email">Email</label>
              <input 
              className='p-2' 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              required />
              <label
              className='py-2'
              htmlFor="password">Password</label>
              <div className='relative'>
              <div 
              onClick={handleEye}
              className='absolute right-0 p-3'>
                {viewEye? <FaEye/> :
                <FaEyeSlash/>}
              </div>
              </div>
              <input 
              className='p-2' 
              type={`${viewEye ? 'text':'password'}`} 
              value={formData.password}
              onChange={handleChange}
              name='password'
              required/> 
              
               
              <button className='border mt-5 mb-1 p-2 bg-blue-900 text-white font-semibold hover:bg-blue-700'> Login </button>
             
             </form>
          </div>
         
            
          

        </div>
    </div>
    </div>
  )
}

export default Login