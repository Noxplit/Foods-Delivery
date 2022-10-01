import React from 'react'

const HeadlineCards = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
			{/* Элементы  */}
			<div className='relative rounded-full shadow-lg hover:scale-105 transition-transform'>
				{/* Слои */}
				<div className=' absolute w-full h-full bg-black/50 rounded-xl text-white '>
					<p className=' font-bold text-2xl px-2 pt-4'>Панкейк по парижски</p>
					<p className='px-2'>Сладкий перекус для всей вашей семьи!</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4 '>
						 Закажи сейчас
					</button>
				</div>
				<img
					className=' max-h-[160px] md: max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='/'
				/>
			</div>
      <div className='relative rounded-full shadow-lg hover:scale-105 transition-transform'>
				{/* Слои */}
				<div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className=' font-bold text-2xl px-2 pt-4'>Шаурма классическая</p>
					<p className='px-2'>Очень вкусная и сочная огромного размера</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4'>
						Закажи сейчас
					</button>
				</div>
				<img
					className=' max-h-[160px] md: max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='/'
				/>
			</div>
      <div className='relative rounded-full shadow-lg hover:scale-105 transition-transform'>
				{/* Слои */}
				<div className=' absolute w-full h-full bg-black/50 rounded-xl text-white'>
					<p className=' font-bold text-2xl px-2 pt-4'>Фруктовый салат <span className='text-orange-600'>НОВИНКА!</span></p>
					<p className='px-2'>Отлично заряжает и придает силы на весь оставшийся день!</p>
					<button className='border-white bg-white text-black mx-2 absolute bottom-4'>
						Закажи сейчас
					</button>
				</div>
				<img
					className=' max-h-[160px] md: max-h-[200px] w-full object-cover rounded-xl'
					src='https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='/'
				/>
			</div>
		</div>
	)
}

export default HeadlineCards
