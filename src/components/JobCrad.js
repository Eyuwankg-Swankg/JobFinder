import React from 'react'

const JobCrad = ({details,index}) => {
    return (
        <div key={index} id="job-card">
            <h3>{details.title}</h3>
            <h5>{details.name}</h5>
            <h6>{details.worktype}</h6>
            <h6>{details.location}</h6>
            <h6>{details.duration}</h6>
            <h6>{details.salary}</h6>
        </div>
    )
}

export default JobCrad
