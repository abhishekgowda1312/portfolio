import React from 'react'
import './WorkCard.css'

function WorkCard({ item }) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt="" className="work-logo" />
            <div className="work-info">
                <label htmlFor="" className="company-name">{item.company}</label>
                <div className="work-dates">
                    <label htmlFor="">{item.dateJoining}-{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p>{item.work}</p>
                </div>
            </div>

        </div>
    )
}

export default WorkCard
