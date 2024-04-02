import React from 'react'
import './Features.css'
import Card from './Card'
import arrow from './Assets/Solid.png'
import card_1 from './Assets/card_1.png'
import card_2 from './Assets/card_2.png'
import card_3 from './Assets/card_3.png'
import card_4 from './Assets/card_4.png'
import card_5 from './Assets/card_5.png'
import card_6 from './Assets/card_6.png'
import upward_arrow from './Assets/Solid-upward.png'
const Features = () => {
  return (
    <>

        <div className="service-container">
            <div className="service-top-content">
                <div className="service-heading">
                    <div className="service-semi-title">
                        <div className="service-arrow-container">
                            <img src={arrow}/>
                        </div>
                        <div id="service-semi-title-text">OUR BEST SERVICES</div>
                    </div>

                    <div className='service-heading-main-title'>We Provide Best Services</div>
                </div>

                <div className="services-card">
                    <Card 
                        img = {card_1}
                        heading = "Strategy and Planning"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />

<                   Card 
                        img = {card_2}
                        heading = "Planning and Strategy"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />

                    <Card 
                        img = {card_3}
                        heading = "Content Marketing"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />

                    <Card 
                        img = {card_4}
                        heading = "Seo Audits & Strategy"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />  

                    <Card 
                        img = {card_5}
                        heading = "Design and Development"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />  

                    <Card 
                        img = {card_6}
                        heading = "Seo Audits & Strategy"
                        desc = "Lorem ipsum dolor sit amet bibendum elit sit finibus Maximus sodales parturien lore arcu eros vel erat pede netus qu"
                    />  
                </div>
            </div>

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
        </div>
    </>
  )
}

export default Features ;
