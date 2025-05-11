import { useEffect, useState } from 'react'
import { navLinks } from '../constants/index'

const NavBar = () => {
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY > 10)}
      window.addEventListener("scroll",handleScroll);
      return()=>window.removeEventListener("scroll",handleScroll)
  },[])
  return (
    <header className={`navbar ${scrolled? "scrolled" : "not-scrolled"}`}>
      <div className='inner'>
        <a className='logo' href='#hero'>Yuhan Xie</a>
        <nav className='desktop'>
          <ul>
            {navLinks.map(({link,name})=>
             (<li key={name} className='group'>
              <a href={link}><span>{name}</span><span className='underline'/>
              </a>
             </li>))}
          </ul>
        </nav>
        <a href='#contact' className='contact-btn group'>  
        <div className='inner'><span>contact me</span></div>
        </a> 
      </div>
    </header>
  )
}

export default NavBar