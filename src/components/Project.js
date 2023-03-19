import Porfolio from "./Porfolio"
import data from '/src/data'
import {social,social2,ecommerces} from '/public/index'




const Project = () => {
  return (
    <div className="mt-40 relative">
      <h1 className="text-5xl  leading-10 mx-auto p-3 text-teal-600 text-center">Projects</h1>
      <hr className="ml-[35%] mr-[55%] w-[80px] relative  w-15 border border-slate-400   my-3  "/>
      <div className="block md:flex gap-5  shadow-sm p-10 mx-w-lg ">
        <Porfolio data={social} />
        <Porfolio data={social2} />
        <Porfolio data={ecommerces}/>
      </div>
    </div>
  )
}

export default Project
