import React from 'react'
import './Skill.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Lorem</span>

      <div className='SkillBars'>

        <div className='SkillBar'>
          <img src={UIDesign} alt='UI Design' className='SkillBarImg' />
          <h2>Frontend devlopment</h2>
          <p>Description here</p>
        </div>

        <div className='SkillBar'>
          <img src={WebDesign} alt='Web Design' className='SkillBarImg' />
          <h2>Mern Stack</h2>
          <p>Description here</p>
        </div>

        <div className='SkillBar'>
          <img src={AppDesign} alt='App Design' className='SkillBarImg' />
          <h2>Java programming</h2>
          <p>Description here</p>
        </div>

      </div>
    </section>
  )
}

export default Skills