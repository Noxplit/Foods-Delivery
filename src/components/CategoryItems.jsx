import React from 'react'

const CategoryItems = ({image, name}) => {
  return (
    <div className='bg-gray-100 rounded-lg flex justify-center items-center hover:scale-105 transition-transform'>
      <img className='w-20' src={image} alt={name} />
      <div className='text-orange-600 font-bold'>{name}</div>
    </div>
  )
}

export default CategoryItems