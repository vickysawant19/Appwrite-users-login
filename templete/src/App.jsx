import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { account } from './appwrite/appwriteConfig'
import { ID } from 'appwrite'

function App() {
  const [count, setCount] = useState(0)

  async function register(){
    try {
      const res =await account.create(ID.unique(),'nagesh@gmail.com','nagesh123')
      console.log(res);
    
    } catch (error) {
      console.log(error);
     
    }

  }

  useEffect(()=>{

  
  register()


  })

  

  return (
    <>
      <div className='uppercasen bg-black w-full h-screen'>
 <div className='text-white flex items-center justify-center'>
  hello
 </div>
      </div>
    </>
  )
}

export default App
