'use client'
import React, { useState } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar({toggleValue}) {
  return (
    <>
      <div className='sticky top-0 flex flex-row'>
        <SidebarIcon toggleValue={toggleValue}/>
        <SidebarSubMenu toggleValue={toggleValue} /> 
      </div>
    </>
  )
}

export default Sidebar