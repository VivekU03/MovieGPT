import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utills/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utills/userSlice";
import { IMAGES, SUPPORTED_LANGUAGES } from "../utills/constants";
import { toggleGptSearch } from "../utills/gptSlice";
import { changeLanguage } from "../utills/configSlice";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa6";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
        navigate("/error");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL} = user;
    dispatch(
      addUser({
      uid: uid, 
      email: email, 
      displayName: displayName, 
      photoURL: photoURL,
    })
  );
  navigate("/browse");

  } else {
    dispatch(removeUser());
    navigate("/");
  }
});

  // Unsubscribe when component unmounts
  return () => unsubscribe();
  }, []);

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch());
  };

  const handleLanguage = (e) =>{
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-5 md:px-8 py-2 bg-linear-to-b from-black z-30 w-full flex justify-between flex-col md:flex-row">
        <img className="w-40 mx-auto md:mx-0 md:w-50" src={IMAGES.LOGO} alt="logo" />
        {user && (
          <div className="flex justify-between items-center mt-4 md:mt-0">
            {showGptSearch && (
              <select className="bg-gray-900 text-white p-2 h-9 text-sm md:text-base" onChange={handleLanguage}>
              {SUPPORTED_LANGUAGES.map((lang) =>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option> 
            ))}
            </select>
          )}
            <button onClick={handleGptSearch} className="py-1 flex items-center px-1 h-9 text-xs md:text-base md:py-2 md:px-3 mx-3 bg-blue-500 text-white rounded-md cursor-pointer">{showGptSearch ? (
              "Home"
            ) : (
              <>
                GPT Search
                <FaSistrix className="ml-1" />
              </>
            )}
          </button>
          <img className="w-8 hidden md:block h-8 mx-2 " src={user?.photoURL} alt="user_icon" />
          <button onClick={handleSignOut} className="text-white text-lg md:text-2xl font-bold cursor-pointer"><FaSignOutAlt/></button>
        </div>
        
      )}
    </div>   
    
  );
};

export default Header