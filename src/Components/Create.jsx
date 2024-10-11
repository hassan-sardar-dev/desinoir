import React from 'react'
import createman from '../assets/create-man.png'
import { ImSpinner8 } from "react-icons/im";

const Create = () => {
    return (
        <div className="bg-[#061E2C] text-white">
            <div className="container mx-auto px-4 py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <img src={createman} alt="Create man" className="w-full h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-4">
                        <h3 className='text-[#EFCB1C] text-lg sm:text-xl font-semibold'>CREATIVITY</h3>
                        <h1 className='font-bold tracking-wider text-3xl sm:text-4xl'>We Strive to Innovate</h1>
                        <p className='text-sm sm:text-base'>Desinior is a design agency that specialized in Product, UI/UX, Graphic Designing and Branding. We collaborate with startups and leading brands to create premium web, mobile App, Saas and Digital products. We help them successfully build strong brands, leverage their story telling channels.</p>
                    </div>
                </div>
                <div className="mt-12 lg:mt-24">
                    <div className="bg-gradient-to-r from-[#197BFF] to-[#1FCE93] rounded-full p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center text-center sm:text-left">
                        <span className='text-5xl sm:text-7xl mb-4 sm:mb-0 sm:mr-6'>
                            <ImSpinner8 />
                        </span>
                        <h4 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>
                            We've over <br className="hidden sm:inline" /> 13 Years of Experience
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create
