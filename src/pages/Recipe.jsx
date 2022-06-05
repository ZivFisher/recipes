import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DetailWrapper, Info } from "../styles/styledDivs";

const Recipe = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  const getRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeObj = await data.json();
    console.log(recipeObj);
    setRecipe(recipeObj);
  };

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <div className='DetailWrapper'>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className='Info'>
        <button
          className={activeTab === "instructions" ? "instructions-ingredients-button-active" : "instructions-ingredients-button"}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={activeTab === "ingredients" ? "instructions-ingredients-button-active" : "instructions-ingredients-button"}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h3>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Recipe;
