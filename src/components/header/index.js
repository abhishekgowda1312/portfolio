import React, { useState } from 'react'
import './Header.css'
import Mobile from './mobile'
import Web from './web'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo">Portfolio</div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
            </div>
            <div className="mobile-menu">
                <div onClick={() => setIsOpen(!isOpen)}>
                    <i class="fi-rr-grid menu-icon"></i>

                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    )
}

export default Header
