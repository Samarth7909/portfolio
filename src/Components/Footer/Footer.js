import './Footer.css'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footerTop'>
        <div className='footerBrand'>
          <img src={logo} alt='Logo' className='footerLogo' />
          <p className='footerTagline'>Building beautiful web experiences.</p>
        </div>

        <div className='footerLinks'>
          <ScrollLink to='intro' smooth={true} offset={-100} duration={500}>Home</ScrollLink>
          <ScrollLink to='skills' smooth={true} offset={-50} duration={500}>About</ScrollLink>
          <ScrollLink to='works' smooth={true} offset={-50} duration={500}>Portfolio</ScrollLink>
          <ScrollLink to='contact' smooth={true} offset={-50} duration={500}>Contact</ScrollLink>
        </div>

        <div className='footerSocials'>
          <a href='https://facebook.com' target='_blank' rel='noreferrer'>
            <img src={facebook} alt='Facebook' />
          </a>
          <a href='https://instagram.com' target='_blank' rel='noreferrer'>
            <img src={instagram} alt='Instagram' />
          </a>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <img src={twitter} alt='Twitter' />
          </a>
          <a href='https://youtube.com' target='_blank' rel='noreferrer'>
            <img src={youtube} alt='YouTube' />
          </a>
        </div>
      </div>

      <div className='footerBottom'>
        <p>© {new Date().getFullYear()} Samarth. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
