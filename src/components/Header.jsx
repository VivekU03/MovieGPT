import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utills/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utills/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utills/constants";
import { toggleGptSearch } from "../utills/gptSlice";
import { changeLanguage } from "../utills/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
        navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid, email, displayName, photoURL} = user;
    dispatch(addUser({uid: uid, 
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
  }, [])

  const handleGptSearch = () =>{
    dispatch(toggleGptSearch());
  };

  const handleLanguage = (e) =>{
    dispatch(changeLanguage(e.target.value))
  };

  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-30 w-full flex justify-between items-center">
        <img className='w-44' src={LOGO} alt="logo" />
        {user && (
          <div className="flex">
            {showGptSearch && (<select className="bg-gray-900 text-white p-2" onChange={handleLanguage}>
              {SUPPORTED_LANGUAGES.map((lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> 
            ))}
            </select>
          )}
            <button onClick={handleGptSearch} className="py-2 px-3 mx-3 bg-blue-500 text-white rounded-md cursor-pointer">{showGptSearch? "Home" : "GPT Search"}</button>
          <img className="w-8 h-8 mx-2 " src={user?.photoURL} alt="user_icon" />
          <button onClick={handleSignOut} className="text-white font-bold cursor-pointer">(Sign Out)</button>
        </div>)}
    </div>   
  )
}

export default Header