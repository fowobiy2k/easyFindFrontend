import hamburger from '../img/menu.svg'
import times from '../img/times-solid.svg'


const Menu = ( { cities, menuEvent, meals } ) => {
    return (
        <div className='menu-main-body'>

            <section className="sidebar">Side Bar</section>
            
            <section className="meal-list container">
                    { meals && meals.map( meal => {
                        
                        return <div className='card'>
                            
                            <img src={ require('../img/food/' + meal.picture).default } alt="photo" />
                            <div className='card-body'>
                                <p><a href='#'>{meal.name}</a></p>
                                <p>${meal.price}</p>
                            </div>
                        </div>
                    })}
            </section>
        </div>
    )
}

export default Menu
