import React, { useEffect, useState } from 'react'
import { useActivePageName, useAuth } from '../../utils/AuthContext'
import { COLLECTION_ID, DATABASE_ID, db } from '../../appwrite/appwriteConfig'
import { Query } from 'appwrite'

const Profile = () => {
    const [profile ,setProfile] = useState([])

    const { setActivePageName } = useActivePageName() 
    const { user} = useAuth()



    async function getProfile(){
        try {
            let res = await db.listDocuments(DATABASE_ID,COLLECTION_ID,[Query.equal('user_id',[user.$id])])
            
            setProfile(res?.documents[0])
           
        } catch (error) {
            console.log(error)
            
        }

    }

   useEffect(()=>{
     setActivePageName('Profile')
     getProfile()
   },[])

   const dob = new Date(profile?.dob);

    const formattedDOB = `${dob.getDate().toString().padStart(2, '0')}-${(dob.getMonth() + 1).toString().padStart(2, '0')}-${dob.getFullYear()}`;


  return (
   <>
   <section className='flex flex-col items-center justify-start m-2'>
    <div className='w-full flex flex-col items-center justify-center border-2 m-2 rounded-xl overflow-hidden  '>
       
        <div className='flex  items-center w-full my-2 '>
            <img className=' w-24 h-24 object-cover m-4 rounded' src={profile?.avatar} alt="" />
            <div>
                
            <h1 className='font-semibold uppercase '>{user?.name}</h1>
            <p className='capitalize'>{profile?.role}</p>
            <p className=''>{profile?.trade}<span  
            className='text-gray-500 ml-2'>{profile?.admission_year}</span></p>
             <p>{profile?.college}</p>
            </div>
        </div>
        <hr className='w-full' />
       { profile?.role === 'student' ? <> <div className='w-full ml-4 font-bold'> Course Details :</div>
        <div className='flex w-full p-2' >
            College Name:
            <p className='ml-2'>{profile?.college}</p>
        </div>
       <div className='flex justify-between items-center w-full'>
            <div className='flex w-full px-2 pb-2' >
                Trade Name:
                <p className='ml-2'> {profile?.trade}</p>
            </div>
            <div className='flex w-full px-2 pb-2' >
                Admission year:
                <p className='ml-2'> {profile?.admission_year}</p>
            </div>
       </div>
        
        <div className='flex w-full px-2 pb-2' >
            Course year:
            <p className='ml-2'>{profile?.course_years}</p>
        </div> </> : ""}

        {/* contact */}
        <hr className='bg-red-500 w-full'/>
           <div className='w-full ml-4 font-bold'> Contact :</div>
        <div className='flex w-full p-2' >
            Phone:
            <p className='ml-2'>{user?.phone}</p>
        </div>
            <div className='flex w-full px-2 pb-2' >
                Email:
                <p className='ml-2'>{user?.email}</p>
            </div>
        <div className='flex w-full px-2 pb-2 ' >
            Address: 
            <p className='ml-2 font-normal'>{profile?.address}</p>
        </div>
        <hr className='bg-red-500 w-full'/>
        {/* personal details */}
           <div className='w-full ml-4 font-bold'> Personal Details :</div>
        <div className='flex w-full p-2' >
            Father Name:
            <p className='ml-2'>{profile?.father_name}</p>
        </div>
        <div className='flex w-full px-2 pb-2' >
            Mother Name:
            <p className='ml-2'>{profile?.mother_name}</p>
        </div>
        <div className='flex w-full px-2 pb-2' >
            Date of Birth:
            <p className='ml-2'>{formattedDOB}</p>
        </div>
    </div>
    
    

   </section>
   
   
   </>
  )
}

export default Profile