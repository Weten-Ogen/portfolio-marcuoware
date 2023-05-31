'use client'
import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'



export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Marcus | Fullstack Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building  exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Projects />
    <Skills />
    <About />
    <Contact />
    </div>
  )
}
