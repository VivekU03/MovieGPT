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

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/274d310a-9543-4b32-87f3-147b372abc00/web/IN-en-20251201-TRIFECTA-perspective_baf6d3bc-eece-4a63-bcbb-e0a2f5d9d9ec_large.jpg";


export const SUPPORTED_LANGUAGES = [
  {identifier: "eng", name: "English"}, 
  {identifier: "hindi", name: "Hindi"}, 
  {identifier: "spanish", name: "Spanish"},
];


  export const GOOGLEGENAI_KEY = import.meta.env.VITE_GOOGLEGENAI_KEY;