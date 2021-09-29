import React from 'react'
import './SocialContact.css'
import { socialData } from '../../data/social'

function SocialContact() {

    const data = socialData


    return (
        <div className="social-contact">
            {data.map((item) => {
                return (
                    <a href={item.link} key={item.platform}>
                        <div className="social-icon-div" >
                            <img src={item.icon} alt="" className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
