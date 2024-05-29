import React from 'react'
import Button from './Button'

function Product({val , mover , count }) {
  return (
    <div className={val ? ` w-full py-20 h-[23rem] text-white ` : ` w-full py-20 h-[23rem] text-white` }>
        <div onMouseEnter={()=>{mover(count)}}
         className='max-w-screen-xl flex items-center justify-between mx-auto'>
            <h1 className='text-6xl capitalize font-medium '>{val.title}</h1>
            <div className='w-1/3'>
                <p className='mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptates est! Aliquid qui illo laudantium amet animi!</p>
                
            <div className='flex items-center gap-10'>
            {val.live && <Button />}
                {val.case &&<Button title='Case Study'  />}
            </div>
            </div>

        </div>
    </div>
  )
}

export default Product