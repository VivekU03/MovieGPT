import logo from "../assets/moviegpt.png";
import avatar from "../assets/avatar.png";
import bgImg from "../assets/bg-img.png";

export const IMAGES = {
  LOGO: logo,
  USER_AVATAR: avatar,
  BG_URL: bgImg,
}


export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";


export const SUPPORTED_LANGUAGES = [
  {identifier: "eng", name: "English"}, 
  {identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"},
];


  export const GOOGLEGENAI_KEY = import.meta.env.VITE_GOOGLEGENAI_KEY;