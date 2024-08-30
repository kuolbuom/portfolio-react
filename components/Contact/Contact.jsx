import React from 'react'
import './Contact.css'
import emails from '../../assets/emails.png'
import icons from '../../assets/icons.png'
import calls from '../../assets/calls.png'

function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ceb5f948-b71d-40ae-99e3-4578eb3993bb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <span>KuoL</span>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently availiable to take on new projects, so feel free to send me a message about anything that you want me to work on. you can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={emails} alt="" /><p>kuolbuom111@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={calls} alt="" /><p>+254768405456</p>
            </div>
            <div className="contact-detail">
              <img src={icons} alt="" /><p>Kakuma refogee camp, Kenya</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor=""> Your Email</label>
          <input type="email" placeholder='Enter yout email' name='email'/>
          <label htmlFor="">Write your message here</label>
          <textarea name="message" rows={8} placeholder='Enter your message'></textarea>
          <button type='submit' className='contact-submit'> Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
