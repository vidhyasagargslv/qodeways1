import React from 'react'

const Gallery = () => {
  return (
    <div className='w-full h-screen'>
      
<div className="w-full h-[80dvh] grid grid-cols-4 grid-rows-5 gap-4">
    <div className='border rounded-2xl'>1</div>
    <div className='border rounded-2xl'>2</div>
    <div className='border rounded-2xl'>3</div>
    <div className='border rounded-2xl'>4</div>
    <div className="row-span-3 border rounded-2xl">5</div>
    <div className='border rounded-2xl'>6</div>
    <div className='border rounded-2xl'>7</div>
    <div className="col-span-2 row-span-2 col-start-2 row-start-3 border rounded-2xl">8</div>
    <div className="row-span-4 col-start-4 row-start-2 border rounded-2xl">9</div>
    <div className="col-span-3 row-start-5 border rounded-2xl">10</div>
</div>
    
    </div>
  )
}

export default Gallery
