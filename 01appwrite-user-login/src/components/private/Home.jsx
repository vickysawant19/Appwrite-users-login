import React, { useEffect } from 'react'
import { useActivePageName } from '../../utils/AuthContext'

const Home = () => {

   const { setActivePageName } = useActivePageName() 
   useEffect(()=>{
     setActivePageName('Home')
   },[])



  return (
    <div className='bg-blue-300 w-full h-14 flex justify-center'>Home page Protected</div>
  )
}

export default Home