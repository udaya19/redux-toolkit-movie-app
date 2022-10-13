import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";
import MovieListing from "./components/MovieListing/MovieListing";
function App() {
  return (
    <div className="app">
      <Header />
      {/* <MovieListing /> */}
      <div class="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbId" element={<MovieDetail />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
