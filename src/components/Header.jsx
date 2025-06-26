import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-green-100 shadow-md px-6 py-2 flex items-center justify-between h-40 relative">
      
      <div className="w-32" />

      
      <div className="flex flex-col items-center justify-center">
        <img
          src={logo}
          alt="Guess My Map"
          className="h-20 scale-[2] object-contain mb-1 pointer-events-none"
        />
        <div className="pt-3"> 
          <h1 className="text-white font-extrabold text-2xl drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
          Repérez les tous
        </h1>
        </div>
        
      </div>

      <div className="flex gap-2 ">
        <Link to="/inscription">
            <button className="bg-yellow-300 text-black font-bold px-4 py-2 rounded-xl shadow-sm border border-black">
      Inscription
        </button>
        </Link>
      
        <button className="bg-blue-400 text-white font-bold px-4 py-2 rounded-xl shadow-sm border border-black">
          Connexion
        </button>
      </div>
    </header>
  );
};

export default Header;