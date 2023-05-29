import React from 'react'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io5';


const Main = () => {
  return (
    <section id='main' className='main'>
      <div className='maincontainer'>
        <h1 className='mainheader '>hey, I&apos;m <span className='text-btnColor text-3xl lg:text-5xl '> Marcus Oware</span></h1>
        <h2 className='mainsubheader'>a fullstack developer</h2>
        
          <p className='mainptag'>I&apos;m a fullstack developer specializing in building (and ocassionally designing) exceptional digital experience.Currently,
            I&apos;m foucused on building responsive fullstack applications
            while learning machine learning and artficial intelligence.
          </p>
        <div className='mainicondiv'>
            <Link href=''>
              <div className='mainicon'>
              <AiOutlineGithub/>
              </div>
            </Link>
            <Link href=''>
              <div className='mainicon'>
              <AiOutlineLinkedin/>
              </div>
            </Link>
            <Link href=''>
              <div className='mainicon'>
              <IoLogoWhatsapp/>
              </div>
            </Link>
          </div>
      
      </div>
    </section>
  )
}

export default Main;