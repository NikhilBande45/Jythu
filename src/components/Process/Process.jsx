import React from 'react'
import './Process.css'
import arrow from './Assets/Solid.png'

import process_1 from './Assets/process_1.png'
import process_2 from './Assets/process_2.png'
import process_3 from './Assets/process_3.png'


const Process = () => {
  return (
    <>
        <div className="process-container">
            <div className="process-content">
                <div className="process-top-content">
                    <div className='process-heading'>
                        <div className='process-arrow'>
                            <img src={arrow}/>
                        </div>
                        <div id='our-work-proess'>
                            OUR WORK PROCESS
                        </div>
                    </div>

                    <div className='process-title'>
                        <div>A Simple, Yet Powerful And</div> 
                        <div>Efficient Process</div>
                    </div>
                </div>

                
                <div className="process-bottom-content">
                    <div className='process-card'>
                        <img src={process_1} />
                        <div id='process-name'>1. MARKETING PLAN</div>
                        <div id='process-text'>
                            <span>Lorem ipsum dolor sit amet natoque.</span>
                            <span>Primis nam feugiat aptent vestibulum</span>
                            <span>pulvinar torqu ent.</span>
                        </div>
                    </div>

                    <div className='process-card'>
                        <img src={process_2} />
                        <div id='process-name'>2. EXECUTION</div>
                        <div id='process-text'>
                            <span>Lorem ipsum dolor sit amet natoque.</span>
                            <span>Primis nam feugiat aptent vestibulum</span>
                            <span>pulvinar torqu ent.</span>
                        </div>
                    </div>


                    <div className='process-card'>
                        <img src={process_3} />
                        <div id='process-name'>1. GROWTH AND SCALE</div>
                        <div id='process-text'>
                            <span>Lorem ipsum dolor sit amet natoque.</span>
                            <span>Primis nam feugiat aptent vestibulum</span>
                            <span>pulvinar torqu ent.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Process
