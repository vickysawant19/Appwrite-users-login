import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements , Route , RouterProvider, Routes} from 'react-router-dom'
import Login from './components/Login.jsx'
import Home from './components/private/Home.jsx'
import { AuthProvider } from './utils/AuthContext.jsx'
import Profile from './components/private/Profile.jsx'



 const router = createBrowserRouter(createRoutesFromElements(
  
  <Route>
    <Route path='login' element={<Login/>}/>
  <Route path='' element={<App/>}>
    <Route path="/" index element={<Home/>}/>
    <Route path="profile" index element={<Profile/>}/>
  </Route>
  </Route>
  
  
 ))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router}/>
   </AuthProvider>
   
  </React.StrictMode>,
)
