import { onAuthStateChanged, signOut } from "firebase/auth";
import {auth} from "../utills/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utills/userSlice";
import { LOGO } from "../utills/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
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

  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-30 w-full flex justify-between items-center">
        <img className='w-44' src={LOGO} alt="logo" />
        {user && (<div className="flex">
          <img className="w-8 h-8 mx-2 " src={user?.photoURL} alt="user_icon" />
          <button onClick={handleSignOut} className="text-white font-bold cursor-pointer">(Sign Out)</button>
        </div>)}
    </div>   
  )
}

export default Header