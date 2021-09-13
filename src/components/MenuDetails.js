import { useState, useEffect } from 'react'
import pic from '../img/food/food2.jpg'

const MenuDetails = ({ match: { params: { id } } }) => {

    const [meal, setMeal] = useState();

    useEffect(() => {
        const getMeal = async () => {
            let res = await fetchMeal(id);
            setMeal(res);
            console.log(res)
        }

        getMeal();
    }, [])

    // Fetch Meal
    const fetchMeal = async (id) => {


        const res = await fetch('/meal/' + id)
        const data = await res.json()

        return data
    }

    return (
        <div>
            {meal ? <div className='meal-details'>

                <div className="name-block"><h4>{meal.name}</h4></div>

                <div className="details-block">
                    <div className="image-block">
                        <img src={require('../img/food/' + meal.picture).default} alt="photo" />
                    </div>
                    <div className="menu-spec">

                        <div className="price">Price: <span className='price'>${meal.price}</span></div>
                        <div className="picture">Ready in: {meal.prepTime} mins</div>
                    </div>
                </div>


            </div> : 'hi'}
        </div>
    )
}

export default MenuDetails
