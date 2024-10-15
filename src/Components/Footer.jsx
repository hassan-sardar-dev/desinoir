import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-[#061E2C] text-white'>
            <div className="content flex flex-col text-center pt-32 justify-center align-middle">
                <div>
                    <h1 className='text-7xl font-bold'>We Always Here</h1>
                    <h1 className='text-7xl font-thin'>Waiting You :)</h1>

                </div>
                <div className='mt-7 text-[#989CAA] text-xl tracking-normal'>
                    <h2>We will do a quick analysis and submit a free proposal for it.</h2>
                    <h2>Don't worry, it's safe and private.</h2>
                    <div className='flex justify-center mt-5'>


                        <button className="relative flex px-3 py-3 gap-3 text-white font-semibold bg-transparent group">

                            <span className="absolute inset-5 top-3 right-3 bg-[#197BFF] w-8 h-8 rounded-full transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-44"></span>
                            <span className="relative z-10">
                                SHARE YOUR IDEAS
                                <FaArrowRightLong className="text-white  absolute top-1 ms-3 hidden group-hover:inline-block transition-opacity duration-70000 ease-in-out" />
                            </span>
                        </button>
                    </div>
                </div>

            </div>


            {/* BOX  */}


        </div>
    )
}

export default Footer
