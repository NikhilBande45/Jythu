import React from 'react'
import './Banner.css'

import banner from './banner.png'
const Banner = () => {
  return (
   <>
        <div className="banner-container">
            <div className="banner-content">
                
                <div className='banner-text'>DIGITAL</div>
                <img src={banner} className='banner-img'/>
                <div className='banner-text'>JYTHU</div>
                <img src={banner} />
                <div className='banner-text'>CREATIVE</div>
            </div>
        </div>
   </>
  )
}

export default Banner
