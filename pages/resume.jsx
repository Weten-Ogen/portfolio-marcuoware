import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const resume = () => {
  return (
    <>
      <Head>
        <title>Marcus | Resume</title>
        <meta
          name='description'
          content='I’m a fullstack web developer specializing in building  exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Marcus Gideon Oware</h2>
          <div className='flex'>
            <Link
              href='https://www.linkedin.com/in/marcus-oware/'
              target='_blank'
              
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </Link>
            <Link
              href='https://github.com/Weten-Ogen'
              target='_blank'
             
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </Link>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development with experience in team leadership, and. Adept at developing strategies and driving streamlined operations. Diverse analytical skills, team collaboration, and
          relationship building. Motivated leader
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Frontend</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span>Radix-UI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Backend </span>
            <span className='px-2'>|</span>Django
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Node JS
            <span className='px-2'>|</span>Postgres SQL
          </p>
            
          <p className='py-2'>
            <span className='font-bold'>Others</span>
            <span className='px-2'>|</span>C lang
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
           Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Socio
            </span>
          </p>
          <p className='py-1 italic'>Front End Web Developer  (2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Worked with integrating the frontend with the Movies Database.
            </li>
            
          </ul>
        </div>

      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Salena's Restaurant | Freelancer
            </span>
          </p>
          <p className='py-1 italic'>Front End Web Developer </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        
       


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
          </p>
          <p className='py-1 italic'>GoCode Commerce - Zoom Class (2021 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “GoCode Commerce”, a Zoom class focused on
              sharing what I was  learning in web development and teaching college student interested in becomming a programmer.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
