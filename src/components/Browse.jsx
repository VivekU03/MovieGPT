import { useEffect } from "react";
import { API_OPTIONS } from "../utills/constants"
import Header from "./Header"
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utills/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBannerContainer from "./VideoBannerContainer";
import MoviesContainer from "./MoviesContainer";

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <VideoBannerContainer/>
      <MoviesContainer/>
    </div>
  )
}

export default Browse