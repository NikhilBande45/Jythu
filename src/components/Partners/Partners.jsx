import React from 'react'
import './Partners.css'
import google from './Assets/google.png'
import amazon from './Assets/amazon.png'
import linkedin from './Assets/linkedin.png'
import slack from './Assets/slack.png'
import walmart from './Assets/walmart.png'

const Partners = () => {
  return (
    <>
        <div className="container">
            <div className="content">
                <div className='title'>
                    <span id="bold-text">200+</span>Trusted Partners
                </div>

                <div className="company-logo">
                    <div>
                        <img src={google}/>
                    </div>

                    <div>
                        <img src={amazon}/>
                    </div>

                    <div>
                        <img src={linkedin}/>
                    </div>

                    <div>
                        <img src={slack}/>
                    </div>

                    <div>
                        <img src={walmart}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Partners
