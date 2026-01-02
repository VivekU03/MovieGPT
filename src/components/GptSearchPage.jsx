import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { IMAGES } from '../utills/constants'

const GptSearchPage = () => {
  return (
    <>
      <div className='fixed -z-10'>
        <img className="h-screen object-cover w-screen" src={IMAGES.BG_URL} alt="bg_img" />
      </div>
      <div className="">
        <GptSearchBar/>
      <GptMovieSuggestions/>
      </div>
    </>
  );
};

export default GptSearchPage