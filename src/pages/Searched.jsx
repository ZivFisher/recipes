import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card2, Grid } from "../styles/styledDivs";

const Searched = () => {
  let params = useParams();
  const [searchedRecipes, setSearchedRecipes] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getSearched(params.search, controller);

    return () => {
      controller.abort();
    };
  }, [params.search]);

  const getSearched = async (name, controller) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`;
    const res = await fetch(url, { signal: controller.signal });
    const recipes = await res.json();
    setSearchedRecipes(recipes.results);
  };

  return (
    <Grid>
      {searchedRecipes.map((recipe) => {
        return (
          <Card2 key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </Card2>
        );
      })}
    </Grid>
  );
};

export default Searched;
