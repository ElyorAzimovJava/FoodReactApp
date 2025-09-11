import {useEffect, useState} from "react";

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState("");
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "db98f8b2309b49e493d652ad47c76f43";
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json();
            setFood(data);
            console.log(data);
        }
      fetchFood();
    },[foodId])

    return (
        <div>Food Details {foodId}
            {food.title}
            <img src={food.image} alt={food.title}/>
        </div>
    )
}