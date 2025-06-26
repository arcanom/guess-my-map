import React from 'react';
import { Link } from "react-router-dom";
const Inscription = () => {

    return(
        <>
                        <div className="flex items-center justify-between w-full px-4 mt-6 relative">
        <Link to="/">
          <button className="bg-corailRed text-white font-bold px-4 py-2 rounded-xl shadow-sm border border-black">
            Retour
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-6 px-4">
        <div className="bg-customYellow p-6 m-5 rounded-xl w-full max-w-3xl flex flex-col gap-6 border-2 border-black min-h-[600px]">
            <div className='flex justify-center'>
                  <h2 className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
                Inscription
            </h2>
            </div>
          
            <div>
                <label htmlFor="guess" className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
                Pseudo
                </label>
                <input
                type="text"
                id="pseudo"
            
                className="border border-black px-3 py-2 rounded w-full"
      />
            </div>
            <div>
              <label htmlFor="guess" className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
                Email
                </label>
                <input
                type="text"
                id="email"
            
                className="border border-black px-3 py-2 rounded w-full"
              />  
           </div>
            <div>
                           <label htmlFor="guess" className="font-semibold text-center text-white text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
                Password
                </label>
                <input
                type="password"
                id="password"
            
                className="border border-black px-3 py-2 rounded w-full"
              /> 
            </div>
                <button
          className="bg-buttonGreen text-white font-bold px-2 py-2 rounded border border-black transition "
        >
          s'inscrire
        </button>
        </div>      
      </div>
        </>

    )
}

export default Inscription;