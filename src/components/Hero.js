import Image from 'next/image'
import marcus from '/public/marcus.png'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'

const Hero = () => {
  return (
    <div className='text-center p-15'>
      <h2 className='text-5xl py-2 leading-8 text-teal-600 capitalize'>marcus oware</h2>
      <h3 className='text-xl  py-2 text-slate-900'>a fullstack developer</h3>
      <p className='py-2 text-md text-slate-600'>A freelancer that provide business solutions for individuals, startups and individual needs. I open to work remotely.Hit me up</p>

      <div className='  text-4xl text-center py-3 text-slate-400 flex gap-16  justify-center '>
        <a href=''><AiFillTwitterCircle/></a>
        <a href='linkedin.com/in/marcus-oware-bb4682229/'><AiFillLinkedin/></a>
        <a href=''><AiFillGithub/></a>
      </div>

      <div className='mt-20 mx-auto overflow-hidden relative w-60 h-60 md:w-80 md:h-80 bg-gradient-to-b from-cyan-600  rounded-full object-cover shadow-md'>
        <Image 
        className='object-cover w-60 h-60 md:w-80 md:h-80 shadow-lg'
        src={marcus} 
        alt='hero-pic'/>
      </div>
     
    </div>
  )
}

export default Hero
