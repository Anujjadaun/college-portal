import React from 'react'

export default function Header() {
  return (
    <div>
              <header className="header container">
            <div className='header-main'>
                <h1 className='header-h1'>
                    {/* <a href="http://visvodayata.ac.in/"><img id="logo" src="http://visvodayata.ac.in/assets/images/logo.png" alt="Logo"/></a> */}
                </h1> 
                    <ul className='nav header-nav'>
                        <li className="nav-item"><a className='nav-link' href="#">Home</a></li>
                        <li className="nav-item"><a className='nav-link' href="#">Login</a></li>
                        <li className='nav-item'><a className='nav-link' href="#">Sign Up</a></li>
                    </ul>
                    <br />
                    </div>    
        </header>
    </div>
  )
}
