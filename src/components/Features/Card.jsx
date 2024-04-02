import React from 'react'
import './Card.css'

import arrow from './Assets/arrow.png'
import design_1 from './Assets/Group_2.png'
import design_2 from './Assets/Group_12.png'
const Card = (props) => {
  return (
    <>
        <div className="card-container">
        
            <div className="card-content">
                <div className="card-img">
                    <img src={props.img}/>
                </div>

                <div className="card-heading">
                    {props.heading}
                </div>

                <div className="card-description">
                    {props.desc}
                </div>

                <div className="card-arrow-container">
                    <div className="card-arrow">
                        <img src={arrow} />
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Card
