import Image from "next/image";
import Link from "next/link";


const Project = (props) => {
  const{title,stack,image} = props.item

  return (
    <div className="projecttag relative group">
      <div className="projectimagediv">
        <Image 
        src={image}
        width={500}
        height={500}
        alt={image}
        className="projectimage"/>
      </div>
      <div className="projectoverlay">
         <div className="projectoverlaydiv">
          <h2 className='projectname'>{title}</h2>
            <p className='projectstack'>{stack}</p>
          <Link href={`project/${title}`}>
            <button  className="projectlink">more info</button>
          </Link>
         </div>
      </div>
    </div>
  )
}

export default Project
