import { NavLink } from "react-router"


function Header() {
  return (
    <div className="flex justify-between px-10 items-center bg-gray-300">
        {/* logo */}
        <img width="80px " className="p-2 rounded-full" src="https://img.freepik.com/premium-vector/online-shop-e-commerce-logo_1199645-37307.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        {/* ul of links */}
        <ul className="flex gap-10 text-2xl">
            <li><NavLink to="" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>Home</NavLink></li>
            <li><NavLink to="products" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>ProductsList</NavLink></li>
            <li><NavLink to="contact" className={({isActive})=>isActive?"text-blue-100 bg-blue-500 p-2":""}>ContactUs</NavLink></li>
        </ul>
    </div>
  )
}

export default Header