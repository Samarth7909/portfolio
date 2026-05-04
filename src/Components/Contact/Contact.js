import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'
import contact from '../../assets/contact.png'
// import facebook from '../../assets/facebook.png'
// import instagram from '../../assets/instagram.png'
// import twitter from '../../assets/twitter.png'
// import youtube from '../../assets/youtube.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Contact = () => {
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3l1gfa4', 'template_jhochjl', form.current, {
        publicKey: 'EoqW0NSDnvOup0j4e',
      })
      .then(
        (result) => {
          e.target.reset();
          alert('Message sent successfully!')
        },
        (error) => {
          alert('Failed to send message: ' + error.text)
        },
      );
  };

 

  return (
    <section id='contact'>
      <h2 className='contactTitle'>Contact Me</h2>
      <span className='contactDesc'>Feel free to reach out — I'd love to hear from you.</span>

      <div className='contactContent'>
        <div className='contactLeft'>
          <img src={contact} alt='contact' className='contactImg' />
          <div className='socialIcons'>
            {/* <a href='https://facebook.com' target='_blank' rel='noreferrer'>
              <img src={facebook} alt='Facebook' className='socialIcon' />
            </a>
            <a href='https://instagram.com' target='_blank' rel='noreferrer'>
              <img src={instagram} alt='Instagram' className='socialIcon' />
            </a>
            <a href='https://twitter.com' target='_blank' rel='noreferrer'>
              <img src={twitter} alt='Twitter' className='socialIcon' />
            </a>
            <a href='https://youtube.com' target='_blank' rel='noreferrer'>
              <img src={youtube} alt='YouTube' className='socialIcon' />
            </a> */}

             <a href='https://www.linkedin.com/in/samarth-gupta-6ab462206' target='_blank' rel='noreferrer'>
            <img src={linkedin} alt='LinkedIn' className='socialIcon' />
          </a>
          <a href='https://github.com/Samarth7909/' target='_blank' rel='noreferrer'>
            <img src={github} alt='github' className='socialIcon' />
            </a>


          </div>
        </div>

        <form ref={form} className='contactForm' onSubmit={handleSubmit}>
          <input type='text' className='contactInput' placeholder='Your Name' required name ='your_name'/>
          <input type='email' className='contactInput' placeholder='Your Email' required name ='your_email' />
          <textarea className='contactInput msgInput' placeholder='Your Message' rows={6} required name='message' />
          <button type='submit' className='contactBtn'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
