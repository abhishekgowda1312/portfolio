import React from 'react'
import './Skills.css'
import Separator from '../../common/separator/index'
import { SkillsData } from '../../data/skills'
import SkillCard from './skill-card'

function Skills() {
    const skills = SkillsData


    return (
        <div className="skills">
            <Separator />
            <label className="section-title">Skills</label>
            <div className="skills-container">
                {skills.map((item) => {
                    return (
                        <div className="skills-section" key={item.type}>
                            <label className="skills-section-title">{item.type}</label>
                            <div className="skills-list">
                                {item.list.map(skill => {
                                    return (
                                        <SkillCard skill={skill} key={skill.name} />

                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
