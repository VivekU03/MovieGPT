export const LOGO = "src/assets/moviegpt.png";

export const USER_AVATAR = "src/assets/avatar.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_URL = "src/assets/bg-img.png";


export const SUPPORTED_LANGUAGES = [
  {identifier: "eng", name: "English"}, 
  {identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"},
];


  export const GOOGLEGENAI_KEY = import.meta.env.VITE_GOOGLEGENAI_KEY;