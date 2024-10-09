import React from 'react'
import object3 from '../assets/object3.png'

const About = () => {
  return (
    <div>
      <div className='py-32 flex justify-between items-center'>
        <div className="about ms-32">
          <h1 className='text-6xl font-bold'>UI
            <span className='font-thin text-6xl'> Store</span>
          </h1>
        </div>
        <div className="vector me-32 ">
          <img src={object3} alt="vector" />
        </div>


      </div>
    </div>
  )
}

export default About
