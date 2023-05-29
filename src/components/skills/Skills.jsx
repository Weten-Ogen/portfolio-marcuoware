import React from 'react';
import Skill from './Skill';
import { skillsData } from '../../../data/skills';

const Skills = () => {
 
  return (
    <section id='skills' className='skills'>
      <div className='skillscontainer'>
        <h1 className='skillheader'>skills</h1>
        <h2 className='skillssubhead'>what i can do</h2>
      <div className='skill'>
        {skillsData.map(item=> <Skill key={item.id} item={item}/>)}
      </div>
      </div>
    </section>
  )
}

export default Skills