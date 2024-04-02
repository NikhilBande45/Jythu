import React from 'react'
import './Footer.css'
import logo from './Assets/logo.png'
import payment_gateway from './Assets/payment.png'
const Footer = () => {
  return (
    <>
        <div className="footer-container">
            <div className="footer-content">
                <div className='footer-company-information'>
                    <img src={logo} className='footer-logo'/>
                    <div className='footer-text-content'>Improve Efficiency, Provide A Better Customer Experience With Modern Technolo Services Available</div>
                </div>
               
                <div className='footer-list'>
                        <div className='footer-list-title'>Resources</div>
                        <div className='footer-list-items'>
                            <div>Carrer</div>
                            <div>About Us</div>
                            <div>Features</div>
                            <div>Services</div>
                        </div>
                        
                </div>

                <div className='footer-list'>
                        <div className='footer-list-title'>Company</div>
                        <div className='footer-list-items'>
                            <div>Blog</div>
                            <div>Developers</div>
                            <div>Our Story</div>
                            <div>About Us</div>
                        </div>
                        
                </div>

                <div className='footer-list'>
                        <div className='footer-list-title'>Help Pages</div>
                        <div className='footer-list-items'>
                            <div>Customer</div>
                            <div>Developers</div>
                            <div>Our Story</div>
                            <div>About Us</div>
                        </div>
                        
                </div>
            
            </div>

            <div className='footer-line'></div>
            <div className='copyright'>Copyright © 2024, All Rights Reversed</div>
        </div>
    </>
  )
}

export default Footer
