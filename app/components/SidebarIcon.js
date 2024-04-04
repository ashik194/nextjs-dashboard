import React, { useState } from 'react'
import { RiDashboard2Line } from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import { RiLayout2Line } from "react-icons/ri";
import logo from "@/public/logo-sm.png"
import Link from 'next/link';
import Image from 'next/image';
import Dashboard from '../(admin)/admin/page';

function SidebarIcon({ toggleValue }) {

  return (
    <div className='bg-white w-[70px] drop-shadow min-h-screen'>
      <div class="flex flex-col items-center pt-6">
        <Link href="#" className='mb-6'>
          <Image src={logo} alt="" height="22" />
        </Link>

        <div className='hover:cursor-pointer flex flex-col gap-3'>

          <div className='h-10 w-10 bg-[#DFF1FB] rounded flex items-center justify-center' id='dashboard'>
            <RiDashboard2Line style={{ color: '#25a0e2' }} size={20} />
          </div>

          <div className=' h-10 w-10 active:bg-[#DFF1FB] rounded flex items-center justify-center' id='app'>
            <RiApps2Line style={{ color: '#6D7080' }} size={20} />
          </div>

          <div className=' h-10 w-10 active:bg-[#DFF1FB] rounded flex items-center justify-center' id='app'>
            <RiLayout2Line style={{ color: '#6D7080' }} size={20} />
          </div>
        </div>

      </div>



      {/*<BiSolidDashboard />*/}
    </div>
  )
}

export default SidebarIcon