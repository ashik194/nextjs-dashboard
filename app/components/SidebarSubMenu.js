import Image from 'next/image'
import React from 'react'
import MainLogo from '@/public/mainLogo.png'

function SidebarSubMenu({ toggleValue }) {

  
  return (
    <div className={toggleValue?'bg-[#f6f8fa] w-[220px] min-h-screen block':'bg-[#f6f8fa] w-[220px] min-h-screen hidden'}>

        <div className="px-5 flex flex-col justify-center items-center min-h-[70px]">
          <span className="">
            <Image src={MainLogo} alt="" height="17" />
          </span>
        </div>

        <div className='pl-7 flex flex-col text-[#7c7f90] text-sm cursor-pointer'>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>Analytics</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2 text-[#25a0e2]'>CRM</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>Ecommerce</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>Crypto</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>Projects</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>NFT</p>
          </span>
          <span className='flex flex-row items-center hover:text-[#25a0e2]'>
            <p>-</p>
            <p className='pl-6 py-2'>Job</p>
          </span>
        </div>

    </div>
 
  )
}

export default SidebarSubMenu