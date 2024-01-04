import { useContext ,useState,useEffect, createContext } from "react";
import { account } from "../appwrite/appwriteConfig";



const AuthContext =  createContext()

export const AuthProvider = ({children}) =>{
    const [loading ,setLoading] =  useState(true)
    const [user,setUser] =useState(null)

    useEffect(()=> {
       checkUserStatus()
    },[])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {

            let resp =await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails = await account.get()
            // console.log(accountDetails)
            setUser(accountDetails)
            
        } catch (error) {
            console.log(error)
            
        } finally{
            setLoading(false)
        }
       
    }

    const logoutUser = async () => {
        account.deleteSession('current')
        setUser(null)
    }

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get()
            setUser(accountDetails)
            
        } catch (error) {
            console.log(error)
            
        }
        setLoading(false)

    }

    const contextData = {
        user,
        loginUser,
        logoutUser,


    }

   return ( 
   <AuthContext.Provider value={contextData}>
            
            {loading ? <p>loading...</p> : children}
            
   </AuthContext.Provider>
 )
    

}

export const useAuth = () => {
   return useContext(AuthContext)
}

export default AuthContext;