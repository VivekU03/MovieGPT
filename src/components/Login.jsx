import React, { useState, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utills/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utills/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utills/userSlice';
import { IMAGES } from '../utills/constants';
import { FaInfoCircle } from "react-icons/fa";


const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () =>{

   const message = checkValidData(email.current.value, password.current.value)
  
   setErrorMessage(message);
   if(message) return;


  //  Sign In/Sign Up logic

  if(!isSignInForm){
      // Sign Up
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
        updateProfile(user, {
      displayName: name.current.value, photoURL: IMAGES.USER_AVATAR
    }).then(() => {
      // Profile updated!
      const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({uid: uid, 
            email: email, 
            displayName: displayName, 
            photoURL: photoURL,
          })
        );
    }).catch((error) => {
        setErrorMessage(error.message);
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
  else{
      // Sign In Logic
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage);
  });
  }
   

  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div className='relative'>
      <Header />  
      <div className='fixed'>
        <img className="h-screen w-screen object-cover" src={IMAGES.BG_URL} alt="bg_img" />
      </div>  
      <div className="h-screen flex items-center">
        <form onSubmit={(e) => e.preventDefault()} className="w-full md:w-3/12 absolute p-10 left-0 right-0 mx-auto bg-black opacity-80 text-white">
        <h1 className='py-2 font-bold text-2xl md:text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-3 my-3 w-full bg-gray-600 rounded-sm"/>}
        <input ref={email} type="text" placeholder="Email Address" className="p-3 my-3 w-full bg-gray-600 rounded-sm" />
        <input ref={password} type="password" placeholder="Password" className="p-3 my-3 w-full bg-gray-600 rounded-sm"/>
        <p className="text-red-500 font-bold py-2">{errorMessage}</p>
        <button className="p-2 my-3 w-full bg-red-600 rounded-sm" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-6 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to MovieGPT? Sign Up Now" : "Already registered? Sign In Now"}</p>
        <p className="flex text-xs"><FaInfoCircle className="text-lg mr-2"/>Demo project — credentials are for testing only</p>
      </form>
      </div> 
    </div>
  );
};

export default Login;