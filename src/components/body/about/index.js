import React from 'react'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hey there 👋, I'm <span className="info-name">Abhishek.</span> <br /> I'm a Front End Developer, who loves to code!<br />
                    Currently working on React, Javascript & building clones of websites.
                </div>
                <div className="about-photo">
                    <img className="about-image" height="200px" width="200px" src="https://avatars.githubusercontent.com/u/73712257?v=4" alt="Abhishek" />
                </div>
            </div>
            <div className="about-bottom">
                Contacts
            </div>
        </div>
    )
}

export default About
