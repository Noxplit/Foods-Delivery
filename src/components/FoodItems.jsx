import React from 'react'
import {RiHeartAddLine} from 'react-icons/ri'
import {MdOutlineAddCircleOutline} from 'react-icons/md'

const FoodItems = ({image, name, price}) => {
  return (
    <div className='border shadow-xl hover:scale-105 transition-transform rounded-lg ' >
      <img src={image} alt={name} className=' w-full h-[200px] object-cover rounded-t-lg '  />
      <div className='text-center font-bold '>
        <p>{name}</p>
        
        
        <p><span className='text-orange-600 text-2xl'>{price}</span></p>
        
      </div>
      <div className='flex justify-between m-4'>
      <RiHeartAddLine size={35} className=' text-end text-orange-600 font-bold'/>
      <MdOutlineAddCircleOutline size={35} className=' text-end text-orange-600 font-bold'/>
      </div>
    </div>
  )
}

export default FoodItems