import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({width , start , para}) {
  return (
    <div className={start ?`p-5 rounded-xl bg-zinc-800 ${width} hover:bg-violet-600 min-h-[60vh]  hover:p-6 transition-all-ease duration-100 flex flex-col justify-between`: `p-5 rounded-xl bg-zinc-800 ${width} min-h-[60vh]  hover:p-6 transition-all-ease duration-100 flex flex-col justify-between`}>
        <div className='w-full'>
            <div className='w-full flex items-center justify-between'>
              <h3>One Heading</h3>
              <IoIosArrowRoundForward />

            </div>
            <h1 className='text-3xl font-medium mt-10'>Whatever Headimg</h1>
        </div>
        <div className='w-full'>
           {start && <>
           
           
            <h1 className='text-6xl font-semibold tracking-tight leading-none '>Started a Project</h1>
           <button className='rounded-full mt-5 px-5 py-2 border-[1px] border-zinc-200'>Contact Us</button>
         </>   }
            
           {para &&  <p className='text-sm font-regular  text-zinc-400 '>Lorem ipsum dolor sit amet consectetur adipisicing.</p>}
        </div>

    </div>
  )
}

export default Card