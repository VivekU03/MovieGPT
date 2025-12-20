import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utills/languageConstants';

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang);

  return (
    <div className="pt-[12%] flex justify-center">
      <form className="bg-black p-4 w-1/2 grid grid-cols-12">
        <input className="bg-white p-2 rounded-sm col-span-10" type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button className="p-2 ml-2 bg-red-700 text-white rounded-sm col-span-2">{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar