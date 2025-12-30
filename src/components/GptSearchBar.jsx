import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utills/languageConstants";
import ai from "../utills/googleGenAi";
import { API_OPTIONS } from "../utills/constants";
import { addGptMovieResult } from "../utills/gptSlice";


const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const moviesSearchTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;

  };

  const handleGptSearch = async () => {
    console.log(searchText.current.value);

    // Make API call to GPT API and get movies results

    const gptQuery = "Act as a Movie recommendation system and suggest movies based on given query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example given ahead. Example Result: Sanam Teri Kasam, Tere Ishk Mein, Bahubali, Border, Dhurandhar"


    const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: [
            {
                role: "user",
                parts: [{ text: gptQuery }]
            },
        ],
  });

    console.log(response.text);

    const gptMovies = response.text.split(",");

    // for each movie I will search TMDC API

    const promiseArray = gptMovies.map(movie => moviesSearchTMDB(movie));

    const ResultsOfTmdb = await Promise.all(promiseArray);

    console.log(ResultsOfTmdb);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: ResultsOfTmdb}));

  };

  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="bg-black p-4 w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="bg-white p-2 rounded-sm col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-2 ml-2 bg-red-700 text-white rounded-sm col-span-2"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
