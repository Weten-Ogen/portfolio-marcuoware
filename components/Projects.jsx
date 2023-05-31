import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dashboardImg from '../public/assets/projects/dashboard.png';
import socioImg from '../public/assets/projects/socio.png'
import sneakersImg from '../public/assets/projects/sneakers.png'
import restaurant from '../public/assets/projects/restaurant.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Dashboard'
            backgroundImg={dashboardImg}
            projectUrl='/dashboard'
            tech='Next Js'
          />
          <ProjectItem
            title='Socio'
            backgroundImg={socioImg}
            projectUrl='/socio'
            tech='React Js'

          />
          <ProjectItem
            title='Restaurant app'
            backgroundImg={restaurant}
            projectUrl='/restaurant'
            tech='React JS'

          />
          <ProjectItem
            title='Sneakers'
            backgroundImg={sneakersImg}
            projectUrl='/sneakers'
            tech='React JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
