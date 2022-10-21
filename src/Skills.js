import React from 'react'
import './Skills.css'
const Skills = () => {
    return (
        <div className='main_skills' id='skills'>
            <h1>Profesional Skills</h1>
            <div className='skills'>
                <div className='htmlS'><i className="fa-brands fa-html5"></i>HTML5</div>
                <div className='htmlS'><i className="fa-brands fa-css3-alt"></i>CSS3 </div>
                <div className='htmlS'><i className="fa-brands fa-js-square"></i>JAVASCRIPT</div>
                <div className='htmlS'><i className="fa-brands fa-react"></i>REACT JS </div>
                <div className='htmlS'><i className="fa-brands fa-node-js"></i>NODE JS </div>
                <div className='htmlS'><i className="fa-brands fa-database"></i>DATABASE </div>
            </div>
        </div>
    )
}

export default Skills;