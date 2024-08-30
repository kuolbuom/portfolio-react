import React from 'react'
import './Footer.css'
import acount from '../../assets/acount.png'

function footer() {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
        <span>KuoL</span>
          <p>I am a frontend developer from Kakuma Refugee Camp, Kenya with 3 years of experience from youtube Tutorials from most important Teachers, like Simon Bao and Dave.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={acount} alt="" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">&copy;2024 kuol buom. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>PrivacyPolicy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default footer
