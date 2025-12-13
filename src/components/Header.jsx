import { signOut } from "firebase/auth";
import {auth} from "../utills/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
  // Sign-out successful.
      navigate("/");
    }).catch((error) => {
        navigate("/error");
    });
  }
  return (
    <div className="absolute px-8 py-2 bg-linear-to-b from-black z-30 w-full flex justify-between items-center">
        <img className='w-44' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && (<div className="flex">
          <img className="w-8 h-8 mx-2 " src={user?.photoURL} alt="user_icon" />
          <button onClick={handleSignOut} className="text-white font-bold cursor-pointer">(Sign Out)</button>
        </div>)}
    </div>   
  )
}

export default Header