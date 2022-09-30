import React from 'react'

const FoodItems = ({image, name, price}) => {
  return (
    <div className='border shadow-xl hover:scale-105 transition-transform rounded-lg' >
      <img src={image} alt={name} className=' w-full h-[200px] object-cover rounded-t-lg '  />
      <div className='text-center font-bold'>
        <p>{name}</p>
        <p><span className='text-orange-600 text-2xl'>{price}</span></p>
        
      </div>

    </div>
  )
}

export default FoodItems