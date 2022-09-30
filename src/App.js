import { useState } from "react";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="App">
 <Navbar setSearchValue={setSearchValue} searchValue={searchValue}/>
 {searchValue === '' ?  <Hero/> : null}
 <Food searchValue={searchValue} setSearchValue={setSearchValue} />
 <HeadlineCards/>

 <Category/>
    </div>
  );
}

export default App;
