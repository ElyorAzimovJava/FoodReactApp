import {useState} from "react";

export default function Search(){
    const [query, setQuery] = useState("pizza");
    return(
        <div>
            <input  onChange={(e) => setQuery(e.target.value)} value={query} type="text" placeholder="Search" />
        </div>
    )
}