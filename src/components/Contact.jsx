import Image from 'next/image'
import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp, IoMail } from 'react-icons/io5'
import Link from 'next/link'
import Form from './Form'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

export const Contact = () => {
  return (

    <section id='contact' className='contact'>
      <article className='formcontact'>
        <div className='contactcontainer'>
          <h1 className='contactheader'>contact</h1>
          <h2 className='contactsubhead'>get in touch</h2>
          <div className='contactimagediv'>
            <Image
            src='/assets/contact.jpg'
            className="contactimage"
            alt='contact.jpg'
            width={200}
            height={200}
             />
          </div>
          <div className='contactinfo '>
            <h2 className='contactname'>marcus oware</h2>
            <h3 className='contactstack'>a fullstack developer</h3>
            <p className='contactptag'>I am available for remote fulltime or freelance positions.Contact me and let's talk</p>
            <div className='contacticondiv'>
              <h4 className='contacticonhead'>contact me </h4>
              <div className='contacticons'>
              <Link href=''>
                <div className='contacticon'>
                <IoLogoTwitter/>
                </div>
              </Link>
              <Link href=''>
                <div className='contacticon'>
                <IoLogoFacebook/>
                </div>
              </Link>
              <Link href=''>
                <div className='contacticon'>
                <IoLogoWhatsapp/>
                </div>
              </Link>
              <Link href=''>
                <div className='contacticon'>
                <IoMail/>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
        <Form/>
      </article>
       <div className='formicondiv'>
        <Link href=''>
            <div className='formicon'>
              <HiOutlineChevronDoubleUp className=' bg-gray-900'/>
            </div>
          </Link>
       </div>
    </section>
  )
}

export default Contact