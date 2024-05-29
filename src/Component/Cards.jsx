import React from 'react'
import Card from './Card'

function Cards() {

  
  return (
    <div className='max-w-screen-xl py-20 flex items-center mx-auto gap-2'>
        <Card width={"basis-1/2 "} start={false} para={true} />
        <Card width={"basis-2/3"}  start={true} para={false}/>

    </div>
  )
}

export default Cards