import React from 'react'
import Image from 'next/image';
export const Skill = (props) => {

  const{title,image} = props.item;

  return (
    <div className='skillouterdiv'>
      <div className='skillcontainer'>
        <div className='skillimagediv'>
            <Image 
            className='skillimage' 
            src={image}
            alt={image}
            width={50}
            height={50}
            />
        </div>
        <p className='skillptag'>
          {title}
        </p>
      </div>
    </div>
  )
}

export default Skill