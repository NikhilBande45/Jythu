import React from 'react'
import './Testinomial.css'
import test_image from './Assets/test.png'
import arrow from './Assets/Solid.png'
import tick from './Assets/Outline.png'
import upward_arrow from './Assets/Solid-upward.png';
const Testinomial = () => {
  return (
    <>
        <div className="test-container">
            <div className="test-content">
                <div className="test-left-content">
                    <div className="test-left-content-1">
                        <div className="about-us">
                            <img src={arrow} /> 
                            <div id="about-us-text">ABOUT US</div>
                        </div>
                        
                        <div className='test-heading'>
                            We Want to Give You The Best Service
                        </div>

                        <div className='test-heading-desc'>
                            We are 100+ professional software engineers with more 
                            than 10 year of experience in delivering superior products 
                            Believe it because you have seen it. Here are real numbers
                        </div>
                    </div>
                        
                    <div className="test-left-content-2">
                        <div className='test-desc-container'>
                            <div className='test-features'>
                                <div className='test-exp'>
                                    <div id="exp">24</div>
                                    <div className='exp-years'>
                                        <div>Year</div>
                                        <div>Experience</div>
                                    </div>
                                </div>
                                <div className='test-feature-list'>
                                    
                                    <div className='test-feature-item'>
                                        <div className='test-feature-item-arrow'>
                                            <img src={tick} />
                                        </div>
                                        
                                        <div className='test-feature-item-text'>Product Engineering</div>
                                    </div>

                                    <div className='test-feature-item'>
                                        <div className='test-feature-item-arrow'>
                                            <img src={tick} />
                                        </div>
                                        
                                        <div className='test-feature-item-text'>Digital Services</div>
                                    </div>

                                    <div className='test-feature-item'>
                                        <div className='test-feature-item-arrow'>
                                            <img src={tick} />
                                        </div>
                                        
                                        <div className='test-feature-item-text'>IT Conultancy</div>
                                    </div>

                                    <div className='test-feature-item'>
                                        <div className='test-feature-item-arrow'>
                                            <img src={tick} />
                                        </div>
                                        
                                        <div className='test-feature-item-text'>Digital Services</div>
                                    </div>

                                </div>
                                
                            </div>

                            <div className='test-btn-container'>
                                <div className='test-btn'>
                                    GET STARTED
                                </div>
                                <div className='test-btn-arrow-container'>
                                    <img  src={upward_arrow}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="test-right-content">
                    <div>
                        <img src={test_image}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Testinomial
