import Item from "./Item.jsx";

export default function ItemList({food,isLoading}) {
    return(
        <div>

            <h2>Ingredients</h2>
            {isLoading ? <p>Loading</p> :
            food.extendedIngredients.map(item =>
                <Item key={item.number} item={item}/>
            )}

        </div>
    )
}
