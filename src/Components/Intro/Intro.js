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
        <span className='introText'>I am <span className='introName'>Samarth</span><br />Full Stack Developer</span>
      <p className='introPara'>Developer with 2+ years delivering cloud-native fintech platforms using Java, Spring Boot and Microservices Architecture. Experienced in Apache Kafka, Redis, Docker/Kubernetes, OAuth2/JWT, PCI-DSS/GDPR compliance, and CI/CD automation. Developed web applications using React.js and other related technologies.</p>
        <div className='btnGroup'>
          <ScrollLink to='contact' spy={true} smooth={true} offset={-50} duration={500} className='btn'>
            <img src={btnImg} alt="Hire" className='btnImg' />
            Hire Me
          </ScrollLink>
          <a href='/resume.pdf' download='Samarth_Resume.pdf' className='btn btnOutline'>
            Resume
          </a>
        </div>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro
