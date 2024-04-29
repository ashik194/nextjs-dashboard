'use client'
import React, { useState } from 'react'
import SidebarIcon from './SidebarIcon'
import SidebarSubMenu from './SidebarSubMenu'

function Sidebar({toggleValue}) {

  const [selectedIcon, setSelectedIcon] = useState('dashboard');

  const handleSelectedIcon = (value) => {
    setSelectedIcon(value);
    console.log(selectedIcon);
  };

  return (
    <>
      <div className='sticky top-0 flex flex-row'>
        <SidebarIcon toggleValue={toggleValue} onUpdateSelected={handleSelectedIcon}/>
        <SidebarSubMenu toggleValue={toggleValue} selected={selectedIcon}/> 
      </div>
    </>
  )
}

export default Sidebar