import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import './intro.css'
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireMe.png'



const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello, my name is</span>
        <span className='introText'>I am <span className='introName'>Samarth</span><br />website developer</span>
      <p className='introPara'>I am a passionate frontend developer with experience in building<br /> web applications using React.js and other related technologies.</p>
        <ScrollLink to='contact' spy={true} smooth={true} offset={-50} duration={500} className='btn'>
          <img src={btnImg} alt="Hire" className='btnImg' />
          Hire Me
        </ScrollLink>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
