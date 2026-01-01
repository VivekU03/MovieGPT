import Header from "./Header"
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import VideoBannerContainer from "./VideoBannerContainer";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header/>
      {
        showGptSearch ? ( 
        <GptSearchPage/> 
        ) : ( 
        <>
          <VideoBannerContainer/>
          <MoviesContainer/>
        </> 
      )} 
    </div>
  );
};

export default Browse;