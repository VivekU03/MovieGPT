import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[20%] px-12 absolute text-white bg-linear-to-r from-black w-screen aspect-video">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="py-5 text-md w-1/3">{overview}</p>
        <div>
            <button className="p-2 bg-white px-10 rounded-sm text-lg text-black hover:opacity-80">Play</button>
            <button className="p-2 bg-gray-600 px-10 rounded-sm text-lg text-white opacity-70 mx-2">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle