import React from 'react'
import './Hero.css'
import kuol3 from '../../assets/kuol3.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function hero() {
  return (
    <div id='home' className='hero'>
      <img src={kuol3} alt="" />
      <h1><span>I'm Kuol Buom,</span> Frontend developer based in Kenya.</h1>
      <p>I am a frontend developer from Kakuma Refugee Camp, Kenya with 3 years of experience from youtube Tutorials from most important Teachers, like Simon Bao and Dave.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default hero
