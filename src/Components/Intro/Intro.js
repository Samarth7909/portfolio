import React from 'react'
import { Link } from 'react-router-dom'
import './intro.css'
import bg from '../../assets/bg.png'
import hireMe from '../../assets/hireMe.png'


const Intro = () => {
  return (
   <section id='intro'>
   <div className='introContent'>
    <span className='hello'>Hello, my name is</span>
    <span className ='introText'>I am <span className='introName'>Samarth</span><br/>website developer</span>
    </div>
     <img src={bg} alt="Profile" className='introImg'/>
    <p className='introPara'>I am a passionate frontend developer with experience in building web applications using React.js and other related technologies.</p>
    <Link to='/contact'><button className='btn'><img src={hireMe} alt="" className='btnImg'/>Contact Me</button></Link>
   </section>
  )
}

export default Intro
