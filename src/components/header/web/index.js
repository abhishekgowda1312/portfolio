import React from 'react'
import './Web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-options">
                <a href="#project">
                    <i className="fi fi-rr-edit-alt option-icon"></i>
                    Project
                </a>
            </div>
            <div className="web-options">
                <a href="#skills">
                    <i className="fi fi-rr-laptop option-icon"></i>
                    Skills
                </a>
            </div>
            <div className="web-options">
                <a href="#work">
                    <i className="fi fi-rr-briefcase option-icon"></i>
                    Work
                </a>
            </div>
            <div className="web-options">
                <a href="#contact">
                    <i className="fi fi-sr-user option-icon"></i>
                    Contact
                </a>
            </div>

        </div>
    )
}

export default Web
