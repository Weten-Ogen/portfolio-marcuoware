import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div  className="about">
      <div id="about" >
        <div className="aboutcontainer">
          <h1 className="aboutheader">about</h1>
          <h2 className="aboutsubhead">who I am</h2>
            <div className="aboutpdiv">
              <div className="flex flex-col gap-2">
                  <p className="aboutptag pt-10">
                    Since seven(7) , I always wanted to be a computer scientist and was always fascinated about hollywood computer genius actors.I was not fully committed till 2020 ,Covid-19 changed my life.I learn C++ which i never mastered,learn python then javascript then back to python and finally C.After learning C that was my eureka moment.I studied data structures ,javascript frameworks and also started teaching my contemporaries, how to coding.I love to create things and in programming.
                  </p>
                  <p className="aboutptag">
                    I can create my own universe where I am in control.I believe you start living once you find love in what you do. I have a strong uderstanding in data structures and algorithms too.Many self thought programmers do not value the importance of data structures. I believe a good programer is one who is 
                    able to create and build applications considering performance and user experience too. I am open to work remotely.
                  </p>
                <Link href='projects'>
                  <div className="aboutptag aboutlink">checkout some of my projects</div>
                </Link>
              </div>
                <div className="aboutimagediv">
                  <Image 
                  src='/assets/about.jpg'
                  width={200} 
                  height={200} 
                  alt='about.jpg'
                  className="aboutimage"/>
              </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default About
