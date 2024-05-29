import { motion } from 'framer-motion'
import React from 'react'

function Marquee( {imagesUrls}) {

  return (
    <div className='flex w-full overflow-hidden'>
    <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease : "linear" , duration: 20 , repeat: Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
    {imagesUrls.map((src) => <img src={src} className=' '   />)}
     
    </motion.div>
    <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease : "linear" , duration: 20 , repeat: Infinity}} className='flex flex-shrink-0 gap-40 py-10 pr-40 '>
    {imagesUrls.map((src) => <img src={src} className=' '   />)}
     
    </motion.div>

    </div>
  )
}

export default Marquee