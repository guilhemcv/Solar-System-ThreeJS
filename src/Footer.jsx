import React from 'react'
import linkedin from './assets/logo-linkedin.png'
import github from './assets/signe-github.png'

export const Footer = () => {
  return (
    <div className='footer'>
      <h3>Made with ❤️ from Boussay - ©️ Guilhem SEYVET</h3>
      <div className='logo'>
        <a href="https://www.linkedin.com/in/guilhem-seyvet/">
      <img className='logohover' src={linkedin} alt="logo Linkedin" width="32px"/>
      </a>
      <a href="https://github.com/guilhemcv">
      <img className='logohover' src={github} alt="logo Github" width="32px" />
      </a>
      </div>
    </div>
  )
}
