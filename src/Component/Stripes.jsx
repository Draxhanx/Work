import React from 'react'

function Stripes({val}) {
  return (
    <div className='w-[20.86%] mt-20 px-5 py-4 flex items-center justify-between border-t-[1.27px] border-b-[1.27px] border-r-[1.27px] border-zinc-300 '>
     <span><img src={val.url} alt="" /></span>
     <span className='font-semibold'>{val.number}</span>
    </div>
  )
}

export default Stripes