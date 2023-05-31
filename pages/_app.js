'use client'

import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [dark,setDark] = useState(false);
  return (
    <div className={dark ? 'darkMode':''}>
      <Navbar  dark={dark} setDark={setDark}/>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
