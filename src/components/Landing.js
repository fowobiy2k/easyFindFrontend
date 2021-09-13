import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick";
import hamburger from '../img/menu.svg'
import food1 from '../img/food/pexels-cats-coming-406152.jpg'
import pharmacy from '../img/pexels-anna-tarazevich-5910956.jpg'
import groceries from '../img/pexels-pixabay-264636.jpg'
import laundry from '../img/pexels-pixabay-325876.jpg'
import times from '../img/times-solid.svg'
import down from '../img/caret-down-solid.svg'


const Landing = ( {menuEvent, cities, testimonies} ) => {


    let settings = {
        infinite: false,
        speed: 1000,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 4,
    
        responsive: [
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
        ],
      };

    const menuHover = (e) => {
        const targetId = e;
    }

    return (
        <div className='main-body'>
            
            <section className="cat-images">
                <div className="food">
                    <p><a href='/menu'>food</a></p>
                    <img src={food1} alt="photo" />
                </div>
                <div className="groceries">
                    <p><a href='#'>groceries</a></p>
                    <img src={groceries} alt="photo" />
                </div>
                <div className="laundry">
                    <p><a href='#'>laundry</a></p>
                    <img src={laundry} alt="photo" />
                </div>
                <div className="pharmacy">
                    <p><a href='#'>Pharmacy</a></p>
                    <a><img src={pharmacy} alt="photo" /></a>
                </div>
                
            </section>
            <section className="testimony container">
                <h5>Testimonies</h5>
                <div className="test-block">
                    { testimonies.length === 0 ? (
                        <div className="spinner-border" role='status'>
                            <span>Loading...</span>
                        </div>
                        
                    ) : (
                        <Slider {...settings}>
                            {testimonies && testimonies.map( (test) => {
                                return <div className='single-test card'>
                                    <img className='rounded-circle' src={food1} alt='photo' />
                                    <div className='card-body'>
                                        <p className='card-text'>{test.message}</p>
                                        <small>...{test.name}</small>
                                    </div>
                                </div>
                            })}
                        </Slider>
                    ) }
                </div>
            </section>
            <footer>
                <p>Address:</p>
                <address>
                    <p>1234, Bourne Crescent, <br /> Ikeja, <br />Lagos <br />PMB: 9876</p>
                </address>
                
            </footer>
        </div>
    )
}

export default Landing
