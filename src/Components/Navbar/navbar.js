import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import close from '../../assets/close.png'
import contact from '../../assets/contact.png'
import logo from '../../assets/logo.png'
import menu from '../../assets/menu.png'
import './navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className='navbar'>
      <img src={logo} alt='Logo' className='logo' />

      <div className='desktopMenu'>
        <ScrollLink activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</ScrollLink>
        <ScrollLink activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</ScrollLink>
        <ScrollLink activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Portfolio</ScrollLink>
        <ScrollLink activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Clients</ScrollLink>
      </div>

      <ScrollLink to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuBtn'>
        <img src={contact} alt='' className='desktopMenuImg' />
        Contact Me
      </ScrollLink>

      <img
        src={menuOpen ? close : menu}
        alt='menu'
        className='mobMenu'
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {menuOpen && (
        <div className='navMenu'>
          <ScrollLink className='listItem' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={() => setMenuOpen(false)}>Home</ScrollLink>
          <ScrollLink className='listItem' to='skills' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenuOpen(false)}>About</ScrollLink>
          <ScrollLink className='listItem' to='works' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenuOpen(false)}>Portfolio</ScrollLink>
          <ScrollLink className='listItem' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenuOpen(false)}>Clients</ScrollLink>
          <ScrollLink className='listItem' to='contact' spy={true} smooth={true} offset={-50} duration={500} onClick={() => setMenuOpen(false)}>Contact Me</ScrollLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
