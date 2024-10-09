import React from 'react'
import object4 from '../assets/object4.png'

const Contact = () => {
    return (
        <div>
            <div className='py-32 flex justify-between items-center'>
                <div className="about ms-32">
                    <h1 className='text-6xl font-bold'>Our
                        <span className='font-thin text-6xl'> Services</span>
                    </h1>
                </div>
                <div className="vector me-32 ">
                    <img src={object4} alt="" />

                </div>


            </div>
        </div>
    )
}

export default Contact
