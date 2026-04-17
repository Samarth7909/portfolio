import React from 'react'
import './Skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>
        Passionate about building scalable, high-performance applications across the full stack.
      </span>

      <div className='SkillBars'>
        <div className='SkillBar'>
          <img src={UIDesign} alt='UI Design' className='SkillBarImg' />
          <div className='SkillBarText'>
            <h2>Frontend Development</h2>
            <p>Building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and modern frameworks like React.</p>
          </div>
        </div>

        <div className='SkillBar'>
          <img src={WebDesign} alt='Web Design' className='SkillBarImg' />
          <div className='SkillBarText'>
            <h2>MERN Stack</h2>
            <p>Full-stack development with MongoDB, Express.js, React, and Node.js for end-to-end web applications.</p>
          </div>
        </div>

        <div className='SkillBar'>
          <img src={AppDesign} alt='App Design' className='SkillBarImg' />
          <div className='SkillBarText'>
            <h2>Java Backend & Microservices</h2>
            <p>Building scalable, robust microservices using Java, Spring Boot, Kafka, and cloud-native technologies.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
