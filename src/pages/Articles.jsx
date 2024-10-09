import React from 'react'
import object2 from '../assets/object2.png'

const Article = () => {
  return (
    <div>
      <div>
        <div className='py-32 flex justify-between items-center'>
          <div className="about ms-32">
            <h1 className='text-6xl font-bold'>Articles
             
            </h1>
          </div>
          <div className="vector me-32 ">
            <img src={object2} alt="vecor" />
          </div>


        </div>
      </div>
    </div>
  )
}

export default Article
