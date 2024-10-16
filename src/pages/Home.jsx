import React from 'react'

import Hero from '../Components/Hero'
import Offers from '../Components/Offers'
import Create from '../Components/Create'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='pt-14'>
      <Hero />
      <Offers />
      <Create/>
      <Footer/>


    </div>
  )
}

export default Home
