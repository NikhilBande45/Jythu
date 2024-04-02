import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
   <>
        <div className="item-container">
            <div className="item-left-content">
                <img src={props.img} />
            </div>

            <div className="item-right-content">
                
                <div className='item-right-content-start'>
                    <div className='type-container'>
                        <div id='work-type'>{props.type}</div>
                    </div>
                    
                    <div>{props.date}</div>
                </div>

                <div className='item-title'>{props.title}</div>

                <div className='item-subtitle'>{props.subtitle}</div>
            </div>
        </div>
   </>
  )
}

export default Item
