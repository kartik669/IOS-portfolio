import { WindowControls } from '#components'
import { socials } from '#constants'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className='p-5 space-y-5'>
        <img
          src='/images/IMG_9801.png'
          alt='Kartik'
          className='w-32 h-32 object-cover object-top rounded-full border-4 border-blue-100 shadow-md' />
        <h3>Let's Connect</h3>
        <p>Got  an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
        <p>kartiksakharkar037@gmail.com</p>
        <ul>
          {socials.map(({ id, text, icon, bg, link }) => (
            <li key={id} style={{ background: bg }}>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                title={text}
              >
                <img src={icon} alt={text} />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
