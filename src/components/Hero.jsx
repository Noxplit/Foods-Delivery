import React from 'react'

const Hero = () => {
	return (
		<div className='max-w-[1640px] mx-auto p-4'>
			<div className='max-h-[500px] relative'>
				{/* Слой */}
				<div className=' absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col  justify-center '>
					<h1 className='text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						Самая <span className=' text-orange-400'>Лучшая</span>
					</h1>
					<h1 className='text-4xl px-4 sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
						<span className=' text-orange-400'>Доставка</span> <span>Еды </span>
					</h1>
				</div>
				<img
					className='w-full max-h-[500px] object-cover'
					src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='/'
				/>
			</div>
		</div>
	)
}

export default Hero
