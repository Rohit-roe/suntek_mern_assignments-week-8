import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function UsersList() {
   let [users,setUsers]=useState([])
   let [error, setError] = useState(null)
   let [loading, setLoading] = useState(false)
   let navigate = useNavigate()
  useEffect(()=>{
    setLoading(true)
    setError(null)
    async function getUsers() {
      try {
        let res=await fetch("http://localhost:3000/user-api/users",{
          method:"GET"
        })
        if (res.status===200){
          let userData = await res.json()
          setUsers(userData.payload)
        } else {
          throw new Error("Failed to fetch")
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    getUsers()
  },[])
  const gotoUser=(userObj)=>{
    navigate("/user",{state:{user:userObj}})
  }
  if(loading===true){
    return <p className='text-center text-2xl text-blue-500'>Loading...</p>
  }
  if (error!==null){
    return <p className='text-2xl text-center text-red-500'>{error.message}</p>
  }
  return (
    <div>
      <h1 className="text-5xl text-blue-900 text-center">List of Users</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {users?.map((userObj) => (
          <div key={userObj.email} className="p-10 shadow-2xl cursor-pointer" onClick={()=>gotoUser(userObj)}>
            <p className="text-3xl">{userObj.name}</p>
            <p className="text-2xl">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList