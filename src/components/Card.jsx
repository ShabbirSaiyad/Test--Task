import React from 'react'

const Card = ({ name, title, text, photo,highlightedText }) => {
  return (
   
        <div className='border border-[#fad7a0]  p-4 flex flex-col gap-4 rounded-xl'> 

            <div className='p-2'>
              <p> Lorem ipsum, dolor sit amet <span className='text-[#ec7063] font-bold'>{highlightedText}</span> quos nostrum veniam ad non eius praesentium tempora, incidunt dolores?</p>
            </div>

            <div className='flex flex-row gap-4'>
                <div  className='rounded-full border border-[#fad7a0]'>

              <img src={photo} alt="photo-1" className='rounded-full w-16 h-16 p-2'/>
                </div>

              <div className='flex flex-col'>
                <p>{name}</p>
                <p>{title}</p>
              </div>

            </div>
            
        </div>
   
  )
}

export default Card