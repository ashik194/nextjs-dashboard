import React from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar() {
  return (
    <>
      <div className='flex'>
        <SidebarIcon />
        <SidebarSubMenu />
      </div>
    </>
  )
}

export default Sidebar