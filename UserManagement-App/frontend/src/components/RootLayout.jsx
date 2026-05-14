import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div className='bg-blue-50'>
        <Header />
        <div className="min-h-screen">
            {/* component placeholder */}
            <Outlet /> 
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout