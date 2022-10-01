import React, { useState } from 'react'
import { data } from './data/data'
import FoodItems from './FoodItems'

const Food = ({ searchValue, category, setCategory}) => {

  const [foods, setFoods] = useState(data)
  console.log(category);

  {/* Фильтрация по категориям */}

 const filterCat = (category) => {
  setFoods(
    data.filter(item => {
      return item.category ===  category
    })
  )}

 const filterPrice = (price) => {
  setFoods(
    data.filter(item => {
      return item.price ===  price
    })
  )
 }

 function returnMainMenu() {
  setCategory(!category)
  window.scrollTo(0, 0)
 }

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

						<button onClick={() => setFoods(data)} className={style.button}>Все</button>
						<button onClick={() => filterCat('burger')} className={style.button}>Бургеры</button>
						<button onClick={() => filterCat('pizza')} className={style.button}>Пицца</button>
						<button onClick={() => filterCat('salad')} className={style.button}>Салаты</button>
						<button onClick={() => filterCat('chicken')} className={style.button}>Курица</button>
					</div>
				</div>
				<div className='flex justify-between max-w-[390px] w-full'>
					<p className={style.p}>Цена:</p>
					<button onClick={() => filterPrice('$')} className={style.button}>$</button>
					<button onClick={() => filterPrice('$$')}className={style.button}>$$</button>
					<button onClick={() => filterPrice('$$$')}className={style.button}>$$$</button>
					<button Click={() => filterPrice('$$$$')} className={style.button}>$$$$</button>
					<div></div>
				</div>
			</div>
      {/* Еда */}

      <div className=' grid grid-cols-1 gap-2 pt-6  lg:grid-cols-4 lg:gap-6 lg:pt-4 sm:grid-cols-2  sm:gap-4 p-3 '>
{foods.filter((items) => items.name.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => 
(
  <FoodItems {...item} key={index}/>
))}
      </div>
      {(category || searchValue) && <div onClick={returnMainMenu} className={` text-center rounded-full border-2  text-3xl p-3  ${style.button}`}>Вернутся в главное меню</div> }
		</div>
	)
}

export default Food
