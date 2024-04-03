import React from 'react'

function Footer() {
  return (
    <>
        <div className='flex justify-between items-center px-4 min-h-[40px] bg-white'>
            <p>{new Date().getFullYear()} &copy; Dashbaord</p>
            <p>Design & Develop by OrangeBD</p>
        </div>
    </>
  )
}

export default Footer