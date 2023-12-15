import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const controller = new AbortController();
    getRecipe(controller);

    return () => {
      controller.abort();
    };
  }, [params.id]);

  const getRecipe = async (controller) => {
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
    const res = await fetch(url, { signal: controller.signal });
    const data = await res.json();
    setRecipe(data);
  };

  return (
    <div className="DetailWrapper">
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="Info">
        <button
          className={
            activeTab === "instructions"
              ? "instructions-ingredients-button-active"
              : "instructions-ingredients-button"
          }
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </button>
        <button
          className={
            activeTab === "ingredients"
              ? "instructions-ingredients-button-active"
              : "instructions-ingredients-button"
          }
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
