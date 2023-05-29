
import Image from 'next/image'
import { About,Main,Skills,Projects,Contact } from '../src/components'


export default function Home() {
 
  return (
    <main className="">
        <Main/>
        <About/>
        <Skills />
        <Projects/>
        <Contact/>
        
    </main>
  )
}

