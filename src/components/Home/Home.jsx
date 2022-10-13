import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/api/movieApi";
import { API_KEY } from "../../common/api/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    try {
      const fetchMovies = async () => {
        const response = await movieApi.get(
          `?apiKey=${API_KEY}&s=${movieText}&type=movie`
        );
        console.log(response);
        dispatch(addMovies(response.data));
      };
      fetchMovies();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
