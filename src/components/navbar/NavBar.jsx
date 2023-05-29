import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai';
import { useState,useEffect } from "react";
import SideBar from './SideBar';



const NavBar = ({setState,darkMode}) => {

  const [showBar,setShowBar] = useState(false);
  const [shadow, setShadow]  = useState(false);
 

  const handleShowBar = () => {
      setShowBar(prev => !prev);
  };

  useEffect(()=> {
    const handleShadow = () => {
      if (window.scrollY>90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll',handleShadow);
  },[])

  return (
    <div className="fixed top-0 left-0 w-full bg-primaryBg">
    <nav className={shadow ? 'nav' : 'noshadownav'}>
      <h1 className="logo">omg</h1>
      <ul className="navul">
        <Link href=''>
          <li className="navli">home</li>
        </Link>
        <Link href='#about'>
          <li className="navli">about</li>
        </Link>
        <Link href='#skills'>
          <li className="navli">skills</li>
        </Link>
        <Link href='#projects'>
          <li className="navli">projects</li>
        </Link>
        <Link href='#contact'>
          <li className="navli">contact</li>
        </Link>
        <li 
        onClick={handleShowBar}
        className="navicon">
          <AiOutlineMenu/>
        </li>
      </ul>
    </nav>
      <>
      {
      showBar && 
      <SideBar showBar={showBar} handleShowBar={handleShowBar} />
      }
      </>
    </div>

  )
}

export default NavBar
