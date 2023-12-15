import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    const controller = new AbortController();
    getCuisine(params.type, controller);

    return () => {
      controller.abort();
    };
  }, [params.type]);

  const getCuisine = async (name, controller) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`;
    const data = await fetch(url, { signal: controller.signal });
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  return (
    <motion.div
      className="Grid"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((recipe) => {
        return (
          <div className="Card2" key={recipe.id}>
            <Link to={"/recipe/" + recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h4>{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Cuisine;
