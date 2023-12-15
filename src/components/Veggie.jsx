import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Wrapper, Gradient, Card1 } from "../styles/styledDivs";
import { Link } from "react-router-dom";
import { fetchData } from "../utils/apiFetch";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    getVeggie(controller);

    return () => {
      controller.abort();
    };
  }, []);

  const getVeggie = async (controller) => {
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`;
    await fetchData(url, "veggie", setVeggie, { signal: controller.signal });
  };

  return (
    <Wrapper>
      <h3>Our Vegetarian Picks</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card1>
                <Link to={"/recipe/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </Link>
              </Card1>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

export default Veggie;
