import React from 'react'
import './Updates.css'
import arrow from './Assets/Solid.png'
import upward_arrow from './Assets/Solid-upward.png'

import img_1 from './Assets/img_1.png'
import img_2 from './Assets/img_2.png'
import img_3 from './Assets/img_3.png'
import img_4 from './Assets/img_4.png'
import Item from './Item'

const Updates = () => {
  return (
    <>
        <div className="updates-container">
            <div className="updates-content">
                
                <div className="update-left-content">
                    <div className='left-content-start'>
                        <div className="update-arrow-container">
                            <img src={arrow} />
                        </div>
                        <div id='our-blogs-and-news'>
                            OUR BLOGS AND NEWS
                        </div>
                    </div>

                    <div className='left-content-title'>
                        <div>Get More Update</div>
                        <div>For News</div>
                    </div>

                    <div className='left-content-text'>
                        We are 100+ professional software engineers with more than 10 years of experience in delivering super products it because you've seen it.
                    </div>

                    <div className="process-botton-content">
                        <div className="process-btn">
                            <span>VIEW ALL BLOGS</span>
                        </div>
                       
                        <div className="process-arrow-container-bottom">
                            <img src={upward_arrow}/>
                        </div>
                    </div>
                </div>

                <div className="update-right-content">
                    <Item 
                        img = {img_1}
                        type = 'Design'
                        date = 'March 7, 2024'
                        title = 'Agency Needs To Embrace Socia Media..'
                        subtitle = 'Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla'
                    />

                    <Item 
                        img = {img_2}
                        type = 'Business'
                        date = 'March 7, 2024'
                        title = 'Lead Designer’s UI/UX Core Checklist.'
                        subtitle = 'Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla'
                    />

                    <Item 
                        img = {img_3}
                        type = 'Development'
                        date = 'March 7, 2024'
                        title = 'Lead Designer’s UI/UX Core Checklist.'
                        subtitle = 'Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla'
                    />

                    <Item 
                        img = {img_4}
                        type = 'Marketing'
                        date = 'March 7, 2024'
                        title = 'We Are Building Everything You Needed'
                        subtitle = 'Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla'
                    />
                </div>

            </div>
        </div>
    </>
  )
}

export default Updates
