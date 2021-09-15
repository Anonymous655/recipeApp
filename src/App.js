import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeBox from "./components/RecipeBox";

function App() {
  // prefer to use dotenv
  const API_ID = "b56efca5";
  const API_key = "819ff134ca04c985f5772a97400665bf";
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState("");
  const [healthLabel, setHealthLabel] = useState("")
  const url =
  `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_key}`;
  async function getRecipes(){
    const results = await axios.get(url)
    setRecipes(results.data.hits)
    console.log(results.data);
  }
  function onSubmit(e){
    e.preventDefault();
    getRecipes()
  }
  return (
    <div className="App">
      <h1 className="heading"> Search for your recipe</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setQuery(e.target.value)} />
        <button type="submit">Search</button>

      </form>
      <div>
          {recipes.map((recipe) => {
            return <RecipeBox  recipe={recipe} />
          })}
      </div>
    </div>
  );
}

export default App;
