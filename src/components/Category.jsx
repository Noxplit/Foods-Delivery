import React from 'react'
import CategoryItems from './CategoryItems'
import { categories } from './data/data'

const Category = () => {
  return (
    <div className=' max-w-[1640px] px-4 py-12 '>
      <h1 className='text-orange-400 text-4xl text-center font-bold'>
        Топ популярных меню
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((items,index) => (
          <CategoryItems {...items} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Category