import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

export default function Header() {
  return (
    <div>
              <header className="header container">
            <div className='header-main'>
                <h1 className='header-h1'>
                    {/* <a to="http://visvodayata.ac.in/"><img id="logo" src="http://visvodayata.ac.in/assets/images/logo.png" alt="Logo"/></a> */}
                </h1> 
                    <ul className='nav header-nav'>
                        <li className="nav-item"><Link className='nav-link' to="/">Login</Link></li>
                        <li className="nav-item"><Link className='nav-link' to="/">Sign Up</Link></li>
                        <li className='nav-item'><Link className='nav-link' to="/">Contact Us</Link></li>
                    </ul>
                    <br />
                    </div>    
        </header>
    </div>
  )
}
