import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import hamburger from './img/menu.svg'
import food1 from './img/food/pexels-cats-coming-406152.jpg'
import pharmacy from './img/pexels-anna-tarazevich-5910956.jpg'
import groceries from './img/pexels-pixabay-264636.jpg'
import laundry from './img/pexels-pixabay-325876.jpg'
import times from './img/times-solid.svg'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Menu from './components/Menu'
import MenuDetails from './components/MenuDetails'
import './App.scss';

function App() {

  const [ openMenu, setOpenMenu ] = useState(false)
    const [ meals, setMeals ] = useState([])
    const [ serviceProviders, setServiceProviders ] = useState([])
    const [ cities, setCities ] = useState( [] )
    const [ testimonies, setTestimonies ] = useState([])

    useEffect( () => {
      const fetchData = async () => {
          await fetchMeals();
          await fetchSP();
          await fetchCities();
          await fetchTestimony();
      }

      fetchData()
  }, [])

  const fetchMeals = async () => {
      const res = await fetch('/meals')
      const data = await res.json()

      setMeals(data)

      console.log(data)
  }

  const fetchSP = async () => {
      const res = await fetch('/sp')
      const data = await res.json()
      setServiceProviders(data)

      console.log(data)
  }

  const fetchCities = async () => {
      const res = await fetch('/cities')
      const data = await res.json();

      setCities(data)

      console.log(data)
  }

  const fetchTestimony = async () => {
      const res = await fetch('/testimony')
      const data = await res.json()
      setTestimonies(data)

      console.log(data)
  }

  const menuEvent = () => {
      let stl = document.getElementById('menu').style.display
      if (stl === "none") {
          document.getElementById('menu').style.display = 'block'
      } else document.getElementById('menu').style.display = 'none'
  }

  return (
    <Router>
      <div className="App">
      <div className="header">
                <h1><span className='easy'>easy</span><span className='find'>find</span></h1>
                <img className='hamburger-menu' src={hamburger} alt="Menu" onClick={menuEvent} />
            </div>
            <div className="menu" id='menu' >
                <ul className='menu-ul'>
                    <img className='times-sign' src={times} alt="times sign" onClick={menuEvent} />
                    <li className='menu-list'><a href='/'>Home</a></li>
                    <li className='menu-list'><a href='#'>About</a></li>
                    <li className='menu-list categories'><a href='#'>
                    Categories</a> 
                    <ul className='category-list'>
                        <li><a href='#'>Food</a></li>
                        <li>Groceries</li>
                        <li>Laundry</li>
                        <li>Pharmacy</li>
                    </ul>
                    </li>
                    <li className='menu-list'><a href='#'>Contacts</a></li>
                </ul>
            </div>
            <section className="search">
                {/* <label htmlFor="searchDropdown">search:</label> */}
                <select name="searchDropdown" id="">
                    <option value="">Select a city</option>
                    { cities && cities.map( (city) => {
                        return <option value={city}>{city}</option>
                    })}
                </select>
                <input type="button" value='Search' />
            </section>
            <section className="catch">
                <h3>you desire, we find. <span>It's that <i>easy</i></span></h3>
            </section>
        <Route path='/' exact render= { props => 
          <Landing {...props} menuEvent={menuEvent} cities={cities} testimonies={testimonies} /> } />
        <Route path='/menu' render= { props => 
          <Menu {...props} openMenu={openMenu} menuEvent={menuEvent} cities={cities} meals={meals} />} />

        <Route path='/menudetails/:id' render= { props => 
          <MenuDetails {...props} />} />
        
      </div>
    </Router>
  );
}

export default App;
