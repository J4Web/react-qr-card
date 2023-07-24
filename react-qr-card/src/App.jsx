import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import qr from './assets/image-qr-code.png'
import './App.css'

function App() {

  return (
    <div className='parent'>
    <div className='card'>
      <div className='qr-card'>
      <img src={qr} alt="QR-Card"/>

      <h3>Improve your front-end skills by building projects</h3>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
  
      </div>
    
  
    </div>
  )
}

export default App
