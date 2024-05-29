import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl flex gap-5 mx-auto  py-10'>
            <div className='basis-1/2  '>
                <h1 className='font-regular text-[11rem] leading-none tracking-tighter'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex '>
                <div className='basis-1/3'>
                  <h4 className='text-zinc-500 capitalize mb-5'>Social</h4>    
                  {["Instagram" , "Twitter (x?)" , " Linkedin"].map((items, index)=> <a className='block capitalize mt-1 text-zinc-500 font-regular ' >{items}</a>)}                
                </div>
                <div className='basis-1/3'>
                  <h4 className='text-zinc-500 capitalize mb-5'>Sitemap</h4>    
                  {["Home", "Work " , " Carrer" , "Contact"].map((items, index)=> <a className='block capitalize mt-1 text-zinc-500 font-regular ' >{items}</a>)}                
                </div>
                <div className='basis-1/2'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, consectetur! Minima ullam facilis excepturi!</p>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Footer