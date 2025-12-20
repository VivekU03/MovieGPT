import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utills/constants'

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={BG_URL} alt="bg_img" />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage