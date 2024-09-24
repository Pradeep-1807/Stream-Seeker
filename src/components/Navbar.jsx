import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className=' w-screen h-[10vh] bg-gradient-to-b from-blue-950 to-cyan-900 sticky top-0 z-[5000] border-1 border-white flex justify-between items-center'>
      <h2 className=' font-title font-semibold sm:font-normal text-2xl sm:text-4xl text-white ml-2 sm:ml-5 w-[50%]'>Stream Seeker</h2>
      <Searchbar />
    </div>
  )
}

export default Navbar
