import { useState } from 'react'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p3 from '../../assets/portfolio-3.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import p6 from '../../assets/portfolio-6.png'
import './Works.css'

const projects = [
  // { id: 1, src: p1, title: 'Project One', desc: 'React.js web application' },
  // { id: 6, src: p6, title: 'Project Six', desc: 'Responsive website design' },
  // { id: 3, src: p3, title: 'Project Three', desc: 'UI/UX design & development' },
  { id: 2, src: p2, title: 'Job_portal', desc: 'Full stack MERN project' },
  { id: 4, src: p4, title: 'Quick_Chat', desc: 'Frontend React project' },
  { id: 5, src: p5, title: 'Scalable_cloud service', desc: 'Java backend application' },
]

const Works = () => {
  const [active, setActive] = useState(null)

  return (
    <section id='works'>
      <span className='worksTitle'>My Portfolio</span>
      <span className='worksDesc'>Here are some of my recent projects.</span> <span>please check git repo some projects are left for deployment</span>

      <div className='worksGrid'>
        {projects.map((p) => (
          <div
            key={p.id}
            className={`worksCard ${active === p.id ? 'worksCardActive' : ''}`}
            onClick={() => setActive(active === p.id ? null : p.id)}
          >
            <img src={p.src} alt={p.title} className='worksImg' />
            <div className='worksOverlay'>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works
