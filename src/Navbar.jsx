import { useEffect, useState } from 'react';
import './Navbar.css'
import './index.css'
import { Link } from "react-scroll";
import logo from './assets/logo.png';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
    <div className="w-name">
    <img src={logo} alt="Logo-img" className='logo'/>
    <div className='n-name'>StudyLoom</div>
    </div>
    <div className="links">
    <ul className={mobileMenu? "" : " hide-menu"}>
    <Link spy={true} smooth={true} to='hero'><li>Home <span></span></li></Link>
    <Link spy={true} smooth={true} to='program' offset={-240}><li>Program <span></span></li></Link>
    <Link spy={true} smooth={true} to='about' offset={-150}><li>About us <span></span></li></Link>
    <Link spy={true} smooth={true} to='gallery' offset={-220}><li>Campus <span></span></li></Link>
    <Link spy={true} smooth={true} to='testimonials' offset={-220}><li>Testimonials <span></span></li></Link>
    <Link spy={true} smooth={true} to='contact' offset={-220}><button className='button n-button'> Contact Us</button></Link>
    </ul>
    <img src="../src/assets/menu-icon.png" alt="" className='menu-icon' onClick={toggleMenu}/>
    </div>

    </nav>
  
  )
}

export default Navbar