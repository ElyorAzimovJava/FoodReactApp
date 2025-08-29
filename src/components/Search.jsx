import {use, useEffect, useState} from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "db98f8b2309b49e493d652ad47c76f43";
export default function Search({foodData, setFoodData}){
    const [query, setQuery] = useState("pizza");

    useEffect(() => {
       async function fetchFood(){
          const res= await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
            setFoodData(data.results);
        }
        fetchFood();
        }
    ,[query])
    return(
        <div>
            <input  onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search" />
        </div>
    )
}