import React from 'react'
import Login from '../components/Login'
import { account } from '../appwrite/appwriteConfig'
import Welcome from '../components/Welcome'
import { useAuth } from './AuthContext'


const PrivateRoute = ({children}) => {

  const {user} = useAuth()
  
  return user? children : <Welcome/>}
    
    
  


export default PrivateRoute