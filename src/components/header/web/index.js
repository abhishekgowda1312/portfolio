import React from 'react'
import './Web.css'

function Web() {
    return (
        <div className="web">
            <div className="web-options">
                <a href="#project">
                    <i class="fi fi-rr-edit-alt option-icon"></i>
                    Project
                </a>
            </div>
            <div className="web-options">
                <a href="#skills">
                    <i class="fi fi-rr-laptop option-icon"></i>
                    Skills
                </a>
            </div>
            <div className="web-options">
                <a href="#work">
                    <i class="fi fi-rr-briefcase option-icon"></i>
                    Work
                </a>
            </div>
            <div className="web-options">
                <a href="#contact">
                    <i class="fi fi-sr-user option-icon"></i>
                    Contact
                </a>
            </div>

        </div>
    )
}

export default Web
