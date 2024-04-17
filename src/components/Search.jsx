import { useEffect, useState } from "react"
import styles from "./search.module.css";


const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "aaaff02359e2412592825a7c2df50acd"

export default function Search({foodData, setFoodData}) {

    const [query, setQuery] = useState("pizza")

     useEffect(() => {
       async function fetchFood() {
        const res =  await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
        const data = await res.json()
        console.log(data.results)
        setFoodData(data.results)
        }
        fetchFood();
     }, [query])
    return(
        <div className={styles.searchContainer}>
            <input className={styles.input}
             type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}/>
        </div>
    )
}