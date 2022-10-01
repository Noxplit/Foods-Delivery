import { useState } from 'react'
import Category from './components/Category'
import Food from './components/Food'
import HeadlineCards from './components/HeadlineCards'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
	const [searchValue, setSearchValue] = useState('')
	const [category, setCategory] = useState(false)

	return (
		<div className='App'>
			<Navbar
				setSearchValue={setSearchValue}
				searchValue={searchValue}
				setCategory={setCategory}
				category={category}
			/>
			{searchValue === '' || category === false ? (
				<div>
					<Hero />
					<HeadlineCards />

					<Category />
				</div>
			) : null}
			<Food
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				category={category}
				setCategory={setCategory}
			/>
		</div>
	)
}

export default App
