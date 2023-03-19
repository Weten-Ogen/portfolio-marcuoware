import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { NavBar,Hero, About, Project } from '../src/components'
const inter = Inter({ subsets: ['latin'] })
import { useState } from 'react'



export default function Home() {
  const [darkMode , setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark': ''}>
      <Head>
        <title>marcuoware</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='p-10 block md:w-[80%] md:mx-auto dark:bg-slate-900' >
        <section className='min-h-screen'>
          <NavBar  setState={setDarkMode} darkMode={darkMode}/>
          <Hero/>
          <About/>
          <Project/>
        </section>
      </main>
    </div>
  )
}
