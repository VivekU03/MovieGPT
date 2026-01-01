import React from 'react';
import { FaPlay } from "react-icons/fa6";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[18%] px-5 md:px-8 absolute text-white bg-linear-to-r from-black w-full aspect-video">
        <h1 className="text-lg md:text-4xl font-bold">{title}</h1>
        <p className="py-5 hidden md:block text-base w-1/3">{overview}</p>
        <div className="my-2 md:my-0">
            <button className="py-1 md:py-2 bg-white px-4 inline-flex items-center md:px-10 rounded-sm text-sm md:text-lg text-black hover:opacity-80 cursor-pointer"><FaPlay className="mr-1" />Play</button>
            <button className="py-1 md:py-2 hidden md:inline-block bg-gray-600 px-4 md:px-10 rounded-sm text-sm md:text-lg text-white opacity-70 mx-2 cursor-pointer">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle