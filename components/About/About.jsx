import React from 'react'
import './About.css'
import kuol7 from '../../assets/kuol7.jpg'

function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <span>KuoL</span>
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={kuol7} alt="" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>I am a Self Taught Frontend Developer with over a decade of Professional expertise in the field. Throughout my career, I would have the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
            <p>My passion for Frontend develoment is not only reflecte in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
