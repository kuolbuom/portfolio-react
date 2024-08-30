import React, { useRef, useState } from 'react'
import './Navbar.css'
import amazon from '../../assets/amazon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import whiteopen from '../../assets/whiteopen.png'
import whiteclose from '../../assets/whiteclose.png'

function Navbar() {

   const [menu,setMenu] = useState("home");

   const menRef = useRef()

   const openMenu = () => {
    menRef.current.style.right='0';
   }
   const closeMenu = () => {
    menRef.current.style.right='-350px';
   }

  return (
    <div className='navbar'>
      <span>KuoL</span>
      <img src={whiteopen} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menRef} className='nav-menu'>
        <img src={whiteclose} onClick={closeMenu} alt="" className='nav-mob-close' />
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>home</p></AnchorLink>{menu==="home"?<img src={amazon} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={amazon} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={amazon} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfpolio</p></AnchorLink>{menu==="work"?<img src={amazon} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={amazon} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
