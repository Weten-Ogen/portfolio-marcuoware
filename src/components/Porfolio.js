import Image from "next/image"


const Porfolio = ({data}) => {
  return (
    <div className="flex flex-col gap-10 lg:flex  shadow-sm shadow-teal-500 p-2">
     <div className="py-2 object-cover outline-none relative w-90 h-90 basis-1/2">
        <Image 
        className="object-cover rounded-md w-full"
        src={data}
        alt={data}/>
     </div>
     <div className="mt-1  p-3 shadow-md   rounded-md ">
        <h1 className="pb-1 text-slate-700 text-3xl">Ecommerce</h1>
        <p><span className="capitalize text-xl text-slate-600">stack</span> : 
            <span className="text-md leading-5 capitalize text-cyan-500">React, Redux ,TailwindCss</span>
        </p>
        <p className="text-md py-1 text-slate-500 leading-2">The tao that can be describedis not the eternal Tao.The name that can be spokenis not the eternal Name.This source is called darkness.

        </p>
     </div>
     <div className="mx-auto mb-2">
      <a className="hover hover:bg-gradient-to-tr hover:from-cyan-600 hover:to-teal-500 p-2 m-2 text-xl bg-gradient-to-l from-teal-500 to-cyan-500 rounded-md text-slate-200 " href="#">Codebase</a>
      <a className="hover hover:bg-gradient-to-tr hover:from-cyan-600 hover:to-teal-500 p-2 m-2 text-xl bg-gradient-to-l from-teal-500 to-cyan-500 rounded-md text-slate-200 " href="#">Demo</a>
     </div>
    </div>
  )
}

export default Porfolio
