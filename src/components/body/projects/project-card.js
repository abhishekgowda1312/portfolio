import React from 'react'
import './ProjectCard.css'

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo && (
                        <a className="project-link" href={project.demo} target="_blank" rel="noreferrer" >
                            <div className="link-button">
                                <i className="fi-rr-globe"></i>Demo
                            </div>
                        </a>
                    )}
                    {project.github && (
                        <a className="project-link" href={project.github} target="_blank" rel="noreferrer" >
                            <div className="link-button">
                                <i className="devicon-github-original colored"></i>GitHub
                            </div>
                        </a>
                    )}
                </div>
                <p>{project.about}</p>
                <div className="project-tags">
                    {project.tags.map((tag) => {

                        return (
                            <label className="tag" key="1">{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} alt="" className="project-photo" />
        </div >
    )
}

export default ProjectCard
