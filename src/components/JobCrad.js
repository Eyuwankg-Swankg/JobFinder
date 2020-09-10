import React from 'react'

const JobCrad = ({details,index}) => {
    return (
        <div key={index} id="job-card">
            <h5>{details.title}</h5>
            <h6>{details.organization}</h6>
            <h6>{details.workType}</h6>
            <h6>{details.duration}</h6>
            <h6>{details.salary}</h6>
        </div>
    )
}

export default JobCrad
