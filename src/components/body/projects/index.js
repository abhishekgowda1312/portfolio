import React from 'react'
import { ProjectData } from '../../data/projects'
import ProjectCard from './project-card'
import './Projects.css'

function Projects() {

    const data = ProjectData

    return (
        <div className="projects">
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project} key={project.id} />
                })}
            </div>
        </div>
    )
}

export default Projects
