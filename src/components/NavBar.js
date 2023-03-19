import React from 'react'
import {BsFillMoonStarsFill,BsMoonStars} from 'react-icons/bs';

const NavBar = ({setState,darkMode}) => {
  return (
    <nav className='flex justify-between mb-20'>
      <h1 className='text-slate-800 text-xl leading-8'>marcuoware</h1>
      <ul className='flex items-center'>
        <li className='mx-2 text-md text-slate-900'
        onClick={() => setState(!darkMode)}
        >{darkMode ? 
        <BsMoonStars/> : 
        <BsFillMoonStarsFill/>}</li>
        <li className='text-lg text-slate-900 rounded-md bg-gradient-to-tr from-cyan-600 to-teal-500'><a href='#' className='p-4 text-lg text-slate-100 cursor-pointer' >resume</a></li>
      </ul>
    </nav>

  )
}

export default NavBar
