import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utills/constants'

const GptSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className="h-screen object-cover w-screen" src={BG_URL} alt="bg_img" />
      </div>
      <div className="">
        <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </>
  );
};

export default GptSearchPage