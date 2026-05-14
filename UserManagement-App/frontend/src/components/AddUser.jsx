import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

function AddUser() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  let [loading, setLoading] = useState(false)
  let [error, setError] = useState(null)
  let navigate = useNavigate()

  const onUserCreate = async (newUser) => {
    setLoading(true)
    setError(null)
    try {
      let res = await fetch("http://localhost:3000/user-api/users", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newUser)
      });
      let result = await res.json()
      if (res.status === 201) {
        navigate("/users-list")
      } else {
        throw new Error(error.message || "error occurred")
      }
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  if(loading===true){
    return <p className='text-center text-2xl text-blue-500'>Loading...</p>
  }
  if (error!==null){
    return <p className='text-2xl text-center text-red-500'>{error.message}</p>
  }
  return (
    <div className='flex flex-col items-center justify-center min-h-[60vh]'>
      <div className= 'p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Add New User</h1>

        <form onSubmit={handleSubmit(onUserCreate)} className='space-y-4'>
          <div>
            <input type="text" {...register("name")} className='w-full p-3 border-2 rounded-md outline-none transition-colors' placeholder='Full Name' />
          </div>

          <div>
            <input type="email" {...register("email")} className='w-full p-3 border-2 rounded-md outline-none transition-colors' placeholder='Email Address' />
          </div>

          <div>
            <input type="date" {...register("dateOfBirth")} className='w-full p-3 border-2 rounded-md outline-none transition-colors' />
          </div>

          <div>
            <input type="number" {...register("mobileNumber")} className='w-full p-3 border-2 rounded-md outline-none transition-colors' placeholder='Mobile Number' />
          </div>

          <button type="submit" className='w-full py-3 rounded-md text-white font-semibold text-lg transition-allbg-blue-600 bg-blue-700 active:scale-[0.98]'>Create User</button>
        </form>
      </div>
    </div>
  )
}

export default AddUser