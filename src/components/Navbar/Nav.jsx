import React from 'react'
import './Nav.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './Assets/logo.png'
const Nav = () => {
  return (
    <>
        <div className="nav-container">
            <div className="nav-content">
                
                <div className="logo">
                    <img src={logo} />
                </div>

                <div className="nav-links">
                    <ul className='nav-links-items'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Pages</li>
                        <li>Service</li>
                        <li>News & Event</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="nav-features">
                    <div className='nav-btn'>
                        GET QUOTE
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav
