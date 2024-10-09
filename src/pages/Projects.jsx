import React from 'react'
import object from '../assets/object.png' 
const Projects = () => {
  return (
    <div>
    <div className='py-32 flex justify-between items-center'>
      <div className="about ms-32">
        <h1 className='text-6xl font-bold'>Our
          <span className='font-thin text-6xl'> Projects</span>
        </h1>
      </div>
      <div className="vector me-32 ">
        <img src={object} alt="vector" />
      </div>


    </div>
  </div>
  )
}

export default Projects
