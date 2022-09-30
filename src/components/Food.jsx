import React, { useState } from 'react'
import { data } from './data/data'
import FoodItems from './FoodItems'

const Food = () => {

  const [foods, setFoods] = useState(data)

	const style = {
		button:
			' border-orange-600 text-orange-600  font-bold hover:bg-orange-600 hover:text-white m-1',
		p: 'font-bold text-gray-700',
	}
	return (
		<div className=' max-w-[1640px] mx-auto px-4 py-12'>
			<h1 className=' text-orange-400 text-4xl text-center font-bold'>Топ популярных продуктов</h1>
			<div className=' flex flex-col lg:flex-row justify-between'>
				{/* Строки */}
				<div>
					<div className='flex justify-between flex-wrap m-2'>
						<p className={style.p}>Категории:</p>

						<button className={style.button}>Все</button>
						<button className={style.button}>Бургеры</button>
						<button className={style.button}>Пицца</button>
						<button className={style.button}>Салаты</button>
						<button className={style.button}>Курица</button>
					</div>
				</div>
				<div className='flex justify-between max-w-[390px] w-full'>
					<p className={style.p}>Цена:</p>
					<button className={style.button}>$</button>
					<button className={style.button}>$$</button>
					<button className={style.button}>$$$</button>
					<button className={style.button}>$$$$</button>
					<div></div>
				</div>
			</div>
      {/* Еда */}

      <div className=' grid grid-cols-1 gap-2 pt-6  lg:grid-cols-4 lg:gap-6 lg:pt-4 sm:grid-cols-2  sm:gap-4 p-3 '>
{foods.map((item, index) => 
(
  <FoodItems {...item} key={index}/>
))}
      </div>
		</div>
	)
}

export default Food
