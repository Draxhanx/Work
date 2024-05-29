import React from 'react'
import Navbar from './Component/Navbar'
import Center from './Component/Center'
import Stripe from './Component/Stripe'
import Products from './Component/Products'
import Marquees from './Component/Marquees'
import Cards from './Component/Cards'
import Footer from './Component/Footer'

import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div
      className=' bg-black w-full  font-[satoshi_variable] text-white'>
        <Navbar />
        <Center />
        
        <Stripe />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>
    </>
  )
}

export default App
