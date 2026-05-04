import { useState } from 'react'
import p1 from '../../assets/portfolio-1.png'
import p2 from '../../assets/portfolio-2.png'
import p4 from '../../assets/portfolio-4.png'
import p5 from '../../assets/portfolio-5.png'
import './Works.css'

const projects = [
   { id: 1, src: p1, title: 'shopper', desc: 'Ecommerce application',url:'https://shopper-frontend-roan.vercel.app' },
  //  { id: 6, src: p6, title: 'Project Six', desc: 'Responsive website design' },
  //  { id: 3, src: p3, title: 'Project Three', desc: 'UI/UX design & development' },
  { id: 2, src: p2, title: 'Job_portal', desc: 'Job portal application',url:'https://job-portal-xbcs.vercel.app/' },
  { id: 4, src: p4, title: 'Quick_Chat', desc: 'chat application', url: 'https://chat-app-taupe-one-98.vercel.app/login' },
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
            onClick={() => p.url ? window.open(p.url, '_blank') : setActive(active === p.id ? null : p.id)}
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
