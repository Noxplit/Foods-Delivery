import React, { useState } from 'react'
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'

const Navbar = ({searchValue, setSearchValue}) => {
	const [nav, setNav] = useState(true)

	return (
		<div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
			{/* Левая сторона */}
			<div className='flex items-center'>
				<div className=' cursor-pointer'>
					<AiOutlineMenu onClick={() => setNav(!nav)} size={30} />
				</div>

				<div className='text-2xl sm:text-3xl lg-text-4xl px-2'>
					Лучшая <span className='font-bold'>Еда</span>
				</div>
				<div className='hidden md:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
					<p className='bg-black text-white rounded-full p-2'>Доставка</p>
					<p className='p-2'>Забрать</p>
				</div>
			</div>
			{/* Кнопка поиска*/}

			<div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
				<AiOutlineSearch size={25} />
				<input value={searchValue} onChange={obj => setSearchValue(obj.target.value)}
					className=' bg-transparent p-2 focus:outline-none  w-full'
					type='text'
					placeholder='Поиск еды...'
				/>
			</div>
			{/*Кнопка корзины*/}
			<button className='bg-black rounded-full  text-white w-[80px] hidden md:flex  items-center py-2  '>
				<BsFillCartFill className=' mx-auto' size={20} />
			</button>

			{/* Мобильное меню */}
			{/* Слои */}
			{nav ? '' : <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>}

			{/* Левый бар корзины*/}
			<div
				className={
					nav
						? 'fixed top-0 left-[-100%] w-[300px] bg-white h-screen z-10 duration-300'
						: 'fixed top-0 left-0 w-[300px] bg-white h-screen z-10 duration-300'
				}>
				<AiOutlineClose
					onClick={() => setNav(!nav)}
					className=' absolute right-4 top-4 cursor-pointer'
					size={30}
				/>
				<h2 className='text-2xl p-4 ml-4'>
					{' '}
					Лучшая <span className='font-bold'>Еда</span>
				</h2>
				<nav>
					<ul className='flex flex-col p-4 text-gray-600'>
						<li className='text-xl py-4 px-4 flex'>
							<TbTruckDelivery className='mr-10' size={25} />
							Заказы
						</li>
						<li className='text-xl py-4 px-4 flex'>
							<MdFavorite className='mr-10' size={25} />
							Избранное
						</li>
						<li className='text-xl py-4 px-4 flex'>
							<FaWallet className='mr-10' size={25} />
							Оплата
						</li>
						<li className='text-xl py-4 px-4 flex'>
							<MdHelp className='mr-10' size={25} />
							Помощь
						</li>
						<li className='text-xl py-4 px-4 flex'>
							<AiFillTag className='mr-10' size={25} />
							Продвижение
						</li>
						<li className='text-xl py-4 px-4 flex'>
							<FaUserFriends className='mr-10' size={25} />
							Пригласить друга
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Navbar
