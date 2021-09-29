import React from 'react'
import './Contact.css'
import Separator from "../../common/separator/index";
import SocialContact from "../../common/social-contact/index"

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in touch? Contact me on any of the Platform!</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a href={require('../../../assets/resume.doc').default} download>
                        <i className="fi-rr-cloud-download download-icon"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
