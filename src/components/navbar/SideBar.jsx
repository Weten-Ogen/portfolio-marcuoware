import React from 'react'
import Link from 'next/link';
import { AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io5';



const SideBar = (props) => {
  const {handleShowBar,showBar} = props;

  return (
    <nav className='sidebar'>
      <div className='sidebarcontainer'>
        <div className='sideheaddiv'>
          <h1 className='sidelogo'>omg</h1>
          <div className='sideheadicon'
          onClick={() => handleShowBar()}>
            <AiOutlineClose/>
          </div>
        </div>
      <ul className="sideul">
        <Link href=''>
          <li  onClick={() => handleShowBar()} className="sideli">home</li>
        </Link>
        <Link href='#about'>
          <li  onClick={() => handleShowBar()} className="sideli">about</li>
        </Link>
        <Link href='#skills'>
          <li  onClick={() => handleShowBar()} className="sideli">skills</li>
        </Link>
        <Link href='#projects'>
          <li  onClick={() => handleShowBar()} className="sideli">projects</li>
        </Link>
        <Link href='#contact'>
          <li  onClick={() => handleShowBar()} className="sideli">contact</li>
        </Link>
      </ul>
        <div className='sideaside'>
          <p className='asidehead'>let&apos;s connect</p>
          <div className='asideicondiv'>

            <Link href=''>
              <div className='asideicon'>
              <AiOutlineGithub/>
              </div>
            </Link>
            <Link href=''>
              <div className='asideicon'>
              <AiOutlineLinkedin/>
              </div>
            </Link>
            <Link href=''>
              <div className='asideicon'>
              <IoLogoWhatsapp/>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SideBar
