import React from 'react'
import './Market.css'

import market_1 from './Assets/market_1.png'
import market_2 from './Assets/market_2.png'
import market_3 from './Assets/market_3.png'
import arrow from './Assets/Solid.png'
import upward_arrow from './Assets/Solid-upward.png'
import phone_icon from './Assets/Outline.png'
const Market = () => {
  return (
    <>
    <div className="market-container">
        
        <div className="market-content">
            
            <div className="market-left-content">
                <div className='vertical-images'>
                    <img src={market_2} id='market-img-1'/>
                    <img src={market_3} id='market-img-2'/> 
                </div>

                <img src={market_1} id='market-img-3'/>
            </div>

            <div className="market-right-content">
                
                <div className='market-right-top-content'>
                    <div id='market-start'>
                        <div className='market-arrow-container'>
                            <img src={arrow} />
                        </div>

                        <div>WITH SEO OPTIMIZATION</div>
                    </div>

                    <div className='market-heading'>
                        Marketing And Creative Solutiond SEO
                    </div>

                    <div className='market-subheading'>
                        We are 100+ professional software engineers with more 
                        than 10 year of experience in delivering superior products.         
                    </div>
                </div>

                <div className='market-right-middle-content'>
                    <div className='market-level'>
                        <div className='market-title'>
                            <div id='market-name'>Finance Consulting</div>
                            <div id='market-percentage'>80%</div>
                        </div>
                        
                        <div className='level-container'>
                            <div className='level'/>
                        </div>
                    </div>
                    
                    <div className='market-level'>
                        <div className='market-title'>
                            <div id='market-name'>Finance Consulting</div>
                            <div id='market-percentage'>80%</div>
                        </div>
                        
                        <div className='level-container'>
                            <div className='level'/>
                        </div>
                    </div>

                    <div className='market-level'>
                        <div className='market-title'>
                            <div id='market-name'>Finance Consulting</div>
                            <div id='market-percentage'>80%</div>
                        </div>
                        
                        <div className='level-container'>
                            <div className='level'/>
                        </div>
                    </div>

                </div>

                <div className='market-right-bottom-content'>
                    <div className="service-botton-content">
                    <div className="service-btn">
                        VIEW ALL SERVICES
                    </div>

                    <div className="service-arrow">
                        <div className="service-arrow-container-bottom">
                            <img src={upward_arrow}/>
                        </div>
                    </div>
                    </div>

                    <div className='contact-details'>
                        <div className='call-icon-container'>
                            <img src={phone_icon} />
                        </div>

                        <div className='market-contact-details'>
                            <div id='call-us-anytime'>
                                Call Us Anytime
                            </div>
                            <div id='mobile_no'>
                                0215 6856 9875
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
    </>
  )
}

export default Market
