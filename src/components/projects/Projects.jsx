import React from 'react'
import Project from './Project'
import projectsData from '../../../data/projects'


const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='projectscontainer'>
        <h1 className='projectsheader'>projects</h1>
        <p className='projectssubhead'>what I have built</p>
        <div className='project'>
          {projectsData.map(item => {
            return <Project key={item.id} item={item}/>
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects