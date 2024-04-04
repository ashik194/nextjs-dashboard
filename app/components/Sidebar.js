'use client'
import React, { useState } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar({toggleValue}) {
  return (
    <>
      <div className='flex'>
        <SidebarIcon />
        {
          toggleValue && <SidebarSubMenu />
        }
        
      </div>
    </>
  )
}

export default Sidebar