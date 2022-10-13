import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
// import movieApi from "../../common/api/movieApi";
// import { API_KEY } from "../../common/api/movieApiKey";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
// import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchAsyncMovies());
      dispatch(fetchAsyncShows());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
