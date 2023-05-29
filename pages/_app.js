import '/styles/globals.css'
import { NavBar } from '../src/components';

const divStyle = `
  scrollBehavior:smooth
`
export default function App({ Component, pageProps }) {
  return <div>
    <NavBar/>
    <div className='items-center flex flex-col justify-center max-w-[80%] mx-auto gap-8' style={{divStyle}}>
      <Component {...pageProps} />
    </div>
  </div>
}
