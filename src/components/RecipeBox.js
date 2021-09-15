import React, {useState} from 'react'
import "../App.css"

function RecipeBox({recipe}) {
    const [show, setshow] = useState(false)
    return (
        <div className="box">
            <h2 className="title">{recipe["recipe"]["label"]}</h2>
            <img className="img" src={recipe["recipe"]["image"]} />
            <div className="last-div"><h3 onClick={e => setshow(true)}>view calorie</h3>
            {show ? <h5>{recipe["recipe"]["calories"]} </h5> : null } </div>
        </div>
    )
}

export default RecipeBox;
