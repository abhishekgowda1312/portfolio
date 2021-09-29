import React from 'react'
import Separator from '../../common/separator/index'
import { WorkData } from '../../data/work'
import WorkCard from './work-card'
import './Work.css'

function Work() {
    const data = WorkData
    return (
        <div className="work">
            <Separator />
            <label className="section-title"></label>
            <div className="work-list">
                {data.map(item => {
                    return (
                        <WorkCard item={item} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work
