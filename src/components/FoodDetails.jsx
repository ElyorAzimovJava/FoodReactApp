import {useEffect, useState} from "react";

export default function FoodDetails({foodId}) {
    const [food, setFood] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const URL = `https://api.spoonacular.com/recipes/${foodId}/information`
    const API_KEY = "db98f8b2309b49e493d652ad47c76f43";
    useEffect(()=>{
        async function fetchFood(){
            const res = await fetch(`${URL}?apiKey=${API_KEY}`)
            const data = await res.json();
            setFood(data);
            setIsLoading(false);
            console.log(data);
        }
      fetchFood();
    },[foodId])

    return (
        <div>
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt={food.title}/>
            </div>
            <div>
            <span>
                <strong>
                    ⌚ {food.readyInMinutes} Minutes
                </strong>
            </span>
            <span>
                <strong>
                     👨‍👩‍👧‍👦 Serves {food.servings}
                </strong>
            </span>
            <span>
                {food.vegetarian ? " 🥕Vegetarian" : "🍖Non-Vegetarian"}
            </span>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
            </div>
            <div>
                <span>$ {food.pricePerServing / 100}  Per serving</span>
            </div>
            <div>
                <h2>Instructions</h2>
                {isLoading ? "Loading..." :food.analyzedInstructions[0].steps.map(step => (
                    <li key={step.number}>{step.step}</li>
                )) }
            </div>

        </div>
    )
}