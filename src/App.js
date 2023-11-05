// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth"
// import { auth } from "./firebase-config";
import React, { useEffect, useRef } from "react";
import { Outlet } from 'react-router-dom';
import home from './assets/home.png';
import { MdOutlineSwipeUp } from 'react-icons/md'

function App() {
  const formRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      formRef.current.scrollIntoView();
    }, 1500);
  });

  // const [phno, setPhno] = useState('');
  // const [pass, setPass] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const user = await createUserWithEmailAndPassword(auth, phno, pass)
  //     console.log(user)
      
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  return (
    <div className="bg-grey1 grid lg:grid-cols-2 max-w-full overflow-hidden">
      <div className="p-8 lg:p-8 grid place-content-center min-h-screen">
        <header className="my-4">
          <h1 className="text-5xl lg:text-6xl text-center font-extrabold">
            SHIVRAJ<sup>&#174;</sup>
          </h1>
          <p className="text-center text-sm">A Division of Super Market</p>
        </header>

        <img className="rounded-lg" src={home} alt="Shop Images" />

        <p className="text-center m-1">Daily Saving Daily Discount</p>

        <div className="w-full absolute bottom-6 left-0 lg:hidden">
          <MdOutlineSwipeUp className="animate-ping text-2xl m-auto" />
        </div>
      </div>

      <div
        ref={formRef}
        className="bg-greenHome1 p-8 drop-shadow-2xl min-h-screen lg:rounded-s-[120px] grid place-content-center"
      >
          <Outlet />
      </div>
    </div>
    // <div style={{backgroundColor: 'lightblue'}}>
    //     Welcome

    //     <form onSubmit={handleSubmit}>
    //     <label className="sm:font-bold md:text-lg" htmlFor="ph">Ph number</label>
    //     <input onChange={e => setPhno(e.target.value)} required id="ph" type="text"  minLength="10"></input>

    //     <label htmlFor="pass" >Password</label>
    //     <input onChange={e => setPass(e.target.value)} required minLength={8} maxLength={16} id="pass" type="password"></input>

    //     <button type="submit">Submit</button>
    //     </form>
    // </div>
  );
}

export default App;
