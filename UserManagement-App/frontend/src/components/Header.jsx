import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
   <div className="flex justify-between items-center px-10 bg-blue-950 m-1">
    <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579_1280.png" alt="" className='w-20 rounded-4xl' />
    <ul className="flex gap-10 text-xl ">
        <li><NavLink to="/" className={({isActive})=>isActive?"text-blue-400":"text-lime-50"}>Home</NavLink></li>
        <li><NavLink to="add-user" className={({isActive})=>isActive?"text-blue-400":"text-lime-50"}>AddUser</NavLink></li>
        <li><NavLink to="users-list" className={({isActive})=>isActive?"text-blue-400":"text-lime-50"}>Users List</NavLink></li>
    </ul>
   </div>
  )
}

export default Header