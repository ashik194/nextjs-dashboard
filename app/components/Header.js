'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import man from "@/public/man.jpg"

function Header(props) {
  const [toggle, setToggle] = useState(true)
    const menuToggle = () => {
        setToggle(!toggle)
        props.handleToggleValue(toggle)
    }
    const [userDetails, setUserDetails] = useState(false)
    const userInfo = () => {
        setUserDetails(!userDetails)
    }
  return (
    <div className='sticky top-0 bg-white min-h-[60px] z-50 border-b border-b-gray-300 flex justify-between items-center px-5 gap-4 h-16'>
      <div className='flex justify-between'>
        <div>
          <button  onClick={menuToggle} className="hidden sm:block nav-link p-2 waves-effect me-auto">
              <span className="sr-only">Menu Toggle Button</span>
              <span className="flex items-center justify-center h-6 w-6">
                  {/* <i className="ph ph-list text-2xl"></i> */}
                  <HiMiniBars3BottomLeft className='text-2xl' />
              </span>
          </button>
        </div>
      </div>


      <div className="relative">
          <button data-fc-type="dropdown" data-fc-placement="bottom-end" onClick={userInfo} type="button" className="nav-link flex items-center gap-2.5 waves-effect p-2">
              <img src={man.src} alt="user-image" className="rounded-full h-8 w-8"/>
              <span className="md:flex items-center hidden">
                  <span className="font-medium text-base">Jamie D.</span>
                  <i className='ph ph-chevron-down'></i>
              </span>
          </button> 
          <div className={`${userDetails?'block':'hidden'} absolute  w-32 z-50 transition-[margin,opacity] duration-300 mt-2 bg-[#405189] shadow-lg border rounded-lg p-2`}>
              <Link className="flex items-center py-2 px-3 rounded-md text-sm text-gray-100 hover:bg-gray-800" href="#">
                  Log Out
              </Link>
          </div>
      </div>


    </div>
  )
}

export default Header