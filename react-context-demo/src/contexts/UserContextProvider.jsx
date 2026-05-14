import {useState} from 'react'
import { UserContext } from './UserContext'
function UserContextProvider({children}) {
    const [user,setUser]=useState({
        name:"ravi",age:20,mail:"ravi@gmail.com"
    })
    // function to update the user details
    const changeUserDetails=()=>{
        setUser(prev=>({
            ...prev,
            name:"roh"
        }))
    }
  return (
    <UserContext.Provider value={{user,changeUserDetails}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider