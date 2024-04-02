import React from 'react'
import main_img from './Assets/header-1.png'
import support_img from './Assets/header-2.png'
import upward_arrow from './Assets/Solid-upward.png'
import play_btn from './Assets/play.png'
import './Header.css'
const Header = () => {
  return (
    <>
        <div className="header-container">
            <div className="header-content">
                
                <div className="left-content">
                    <img src={main_img} id="img-1"/>
                    <div className="suuport-img-container">
                        <img src={support_img} id="img-2"/>
                    </div>
                </div>

                <div className="right-content">
                    <div className="welcome">
                        WELCOME TO JYTHU
                    </div>

                    <div className="main-heading">
                        <div>A Marketing</div>
                        <div> <span id='agency'>Agency</span> To Grow</div>
                        <div>Your Business</div>
                    </div>

                    <div className="heading-desc">
                    We are 100+ professional software engineers with more than 10 year of 
                    experience in delivering superior products Believe it because you have 
                    seen it. Here are real numbers
                    </div>

                    <div className="header-btn">
                        <div className='left-btn'>
                            <div className="get-started-btn">
                                GET STARTED
                            </div>
                            <div className='header-arrow-container'>
                                <img src={upward_arrow} />
                            </div>
                        </div>

                        <div className="right-btn">
                            <div className="header-right-image-container">
                                <img src={play_btn} />
                            </div>
                            WATCH VIDEO
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
